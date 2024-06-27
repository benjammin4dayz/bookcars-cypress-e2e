import { execSync } from 'child_process';

// requires the following key to be set in Cypress' config
// experimentalInteractiveRunEvents: true,
//
// if this key is falsy, this plugin will effectively be NOOP

export default (
  on,
  config,
  { strict = true, beforeRun = true, beforeSpec = true } = {}
) => {
  const lint = strictMode => {
    let fail = false;
    try {
      execSync('npm run lint', { stdio: 'inherit' });
    } catch (e) {
      if (strictMode) throw e;
      fail = true;
    } finally {
      if (!fail) {
        console.log('No errors found. Happy testing!');
      }
    }
  };

  if (beforeRun) {
    on('before:run', () => {
      lint(strict);
    });
  }
  if (beforeSpec) {
    on('before:spec', () => {
      lint(strict);
    });
  }
};
