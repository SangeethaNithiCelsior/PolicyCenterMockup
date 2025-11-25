#!/usr/bin/env node

/**
 * Parse Jest test log and create summary.json
 * Usage: node create-test-summary.js <logFile> <outputDir>
 */

const fs = require('fs');
const path = require('path');

function parseJestLog(logContent) {
  const summary = {
    buildNumber: null,
    timestamp: new Date().toISOString(),
    exitCode: null,
    stats: {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      duration: null
    },
    testSuites: {
      total: 0,
      passed: 0,
      failed: 0
    },
    failures: [],
    warnings: []
  };

  const lines = logContent.split('\n');
  let currentFailure = null;
  let inFailureBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Extract test stats (e.g., "Tests: 14 failed, 36 passed, 50 total")
    const testStatsMatch = line.match(/Tests:\s+(\d+)\s+failed,\s+(\d+)\s+passed,\s+(\d+)\s+total/);
    if (testStatsMatch) {
      summary.stats.failed = parseInt(testStatsMatch[1]);
      summary.stats.passed = parseInt(testStatsMatch[2]);
      summary.stats.total = parseInt(testStatsMatch[3]);
    }

    // Extract test suites stats
    const suiteStatsMatch = line.match(/Test Suites:\s+(\d+)\s+failed,\s+(\d+)\s+passed,\s+(\d+)\s+total/);
    if (suiteStatsMatch) {
      summary.testSuites.failed = parseInt(suiteStatsMatch[1]);
      summary.testSuites.passed = parseInt(suiteStatsMatch[2]);
      summary.testSuites.total = parseInt(suiteStatsMatch[3]);
    }

    // Extract duration
    const durationMatch = line.match(/Time:\s+([\d.]+\s*s)/);
    if (durationMatch) {
      summary.stats.duration = durationMatch[1];
    }

    // Detect FAIL markers for test files
    const failFileMatch = line.match(/^FAIL\s+(.+\.test\.js)$/);
    if (failFileMatch) {
      inFailureBlock = true;
      currentFailure = {
        file: failFileMatch[1],
        tests: []
      };
      continue;
    }

    // Detect PASS markers (end of previous failure block)
    if (line.match(/^PASS\s+/)) {
      if (currentFailure && currentFailure.tests.length > 0) {
        summary.failures.push(currentFailure);
      }
      inFailureBlock = false;
      currentFailure = null;
      continue;
    }

    // Parse individual test failures (● Test Suite › test name)
    if (inFailureBlock) {
      const testFailMatch = line.match(/^\s*●\s+(.+?)\s+›\s+(.+)$/);
      if (testFailMatch && currentFailure) {
        const testSuite = testFailMatch[1];
        const testName = testFailMatch[2];
        
        // Look ahead for error message
        let errorMessage = '';
        let j = i + 1;
        while (j < lines.length && j < i + 10) {
          const nextLine = lines[j];
          // Stop at next test failure or end of error block
          if (nextLine.match(/^\s*●/) || nextLine.match(/^\s*at\s+/)) {
            break;
          }
          if (nextLine.trim() && !nextLine.match(/^\s*(Ignored nodes|Here are|If this is)/)) {
            errorMessage = nextLine.trim();
            break;
          }
          j++;
        }

        currentFailure.tests.push({
          suite: testSuite,
          name: testName,
          error: errorMessage || 'Test failed (see full log for details)'
        });
      }
    }

    // Detect warnings (console.warn)
    if (line.includes('console.warn')) {
      const nextLine = lines[i + 1] || '';
      if (nextLine.includes('React Router Future Flag Warning')) {
        const warningMatch = nextLine.match(/⚠️\s+(.+)/);
        if (warningMatch && !summary.warnings.includes(warningMatch[1])) {
          summary.warnings.push(warningMatch[1]);
        }
      }
    }

    // Extract exit code from status marker
    const exitCodeMatch = line.match(/===== TEST STATUS: FAILED \(exit code (\d+)\) =====/);
    if (exitCodeMatch) {
      summary.exitCode = parseInt(exitCodeMatch[1]);
    }
    
    if (line.match(/===== TEST STATUS: PASSED =====/)) {
      summary.exitCode = 0;
    }
  }

  // Add last failure if still collecting
  if (currentFailure && currentFailure.tests.length > 0) {
    summary.failures.push(currentFailure);
  }

  return summary;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('Usage: node create-test-summary.js <logFile> <outputDir>');
    process.exit(1);
  }

  const logFile = args[0];
  const outputDir = args[1];
  const buildNumber = args[2] || path.basename(outputDir);

  if (!fs.existsSync(logFile)) {
    console.error(`Log file not found: ${logFile}`);
    process.exit(1);
  }

  const logContent = fs.readFileSync(logFile, 'utf8');
  const summary = parseJestLog(logContent);
  
  // Add build number
  summary.buildNumber = parseInt(buildNumber) || null;
  
  // Add log file reference
  summary.logFile = path.basename(logFile);

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const summaryFile = path.join(outputDir, 'summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));

  console.log(`✓ Test summary created: ${summaryFile}`);
  console.log(`  Total tests: ${summary.stats.total}`);
  console.log(`  Passed: ${summary.stats.passed}`);
  console.log(`  Failed: ${summary.stats.failed}`);
  console.log(`  Exit code: ${summary.exitCode}`);
  
  process.exit(0);
}

main();
