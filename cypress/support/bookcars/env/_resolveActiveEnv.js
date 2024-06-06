/**
 *
 * @param {string} name
 * @returns
 */
export const _resolveActiveEnv = (name) => {
  const activeEnv = Cypress.env("__active_env");

  try {
    return Cypress.env(activeEnv)[name];
  } catch (e) {
    throw new Error(
      `Cannot set active environment because '${activeEnv}' does not match any environment in cypress.env.json`
    );
  }
};
