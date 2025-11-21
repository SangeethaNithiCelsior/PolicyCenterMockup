// frontend/scripts/patch-schema-utils.js
// Create a shim so require('schema-utils') returns a function (callable)
// and also exposes .validate, ValidationError, etc. — compatible with older plugins.

const fs = require('fs');
const path = require('path');

const pkgRoot = path.join(__dirname, '..');
const modPath = path.join(pkgRoot, 'node_modules', 'schema-utils');
const idxFile = path.join(modPath, 'index.js');

if (!fs.existsSync(modPath)) {
  console.log('schema-utils not installed — skipping patch');
  process.exit(0);
}

try {
  // try to require the real dist validate
  const distValidatePath = require.resolve('schema-utils/dist/validate', { paths: [modPath] });
  // create shim content
  const shim = `// Auto-generated callable shim for schema-utils (compat)
try {
  const real = require('./dist/validate');
  // If real is a function, create a callable wrapper that delegates to it
  function validate(/* ...args */) {
    return real.apply(this, arguments);
  }
  // copy any properties from real onto the function
  Object.keys(real).forEach(k => { try { validate[k] = real[k]; } catch(e){} });
  // ensure common names exist
  if (real && real.ValidationError) validate.ValidationError = real.ValidationError;
  if (real && real.ValidateError) validate.ValidateError = real.ValidateError;
  module.exports = validate;
} catch (e) {
  try {
    module.exports = require('./dist/validate');
  } catch (err) {
    console.warn('schema-utils shim: fallback failed', err && err.message);
    module.exports = function () { return undefined; };
  }
}
`;
  fs.writeFileSync(idxFile, shim, { encoding: 'utf8' });
  console.log('Patched schema-utils index.js (callable shim)');
} catch (err) {
  console.error('Failed to patch schema-utils:', err && err.message);
  process.exit(1);
}