#!/usr/bin/env node

/**
 * Test Runner Script for PolicyCenterMockup
 * 
 * This script provides convenient commands to run different types of tests:
 * - npm run test:all - Run all tests once
 * - npm run test:watch - Run tests in watch mode
 * - npm run test:coverage - Run tests with coverage report
 * - npm run test:component [name] - Run tests for specific component
 */

const { spawn } = require('child_process');
const path = require('path');

const commands = {
  all: ['npm', ['test', '--watchAll=false']],
  watch: ['npm', ['test']],
  coverage: ['npm', ['run', 'test:coverage']],
  ci: ['npm', ['run', 'test:ci']],
  debug: ['npm', ['run', 'test:debug']],
};

function runCommand(command, args = []) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      cwd: __dirname
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });

    process.on('error', (error) => {
      reject(error);
    });
  });
}

function showHelp() {
  console.log(`
PolicyCenterMockup Test Runner

Usage: node test-runner.js [command]

Commands:
  all       Run all tests once
  watch     Run tests in watch mode (default)
  coverage  Run tests with coverage report
  ci        Run tests for continuous integration
  debug     Run tests in debug mode
  help      Show this help message

Examples:
  node test-runner.js all
  node test-runner.js coverage
  node test-runner.js watch
  `);
}

async function main() {
  const command = process.argv[2] || 'watch';

  if (command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    return;
  }

  if (!commands[command]) {
    console.error(`Unknown command: ${command}`);
    showHelp();
    process.exit(1);
  }

  try {
    console.log(`Running tests with command: ${command}`);
    const [cmd, args] = commands[command];
    await runCommand(cmd, args);
    console.log('Tests completed successfully!');
  } catch (error) {
    console.error('Test execution failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { runCommand, commands };