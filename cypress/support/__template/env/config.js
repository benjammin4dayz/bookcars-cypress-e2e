import { _resolveActiveEnv } from "./_resolveActiveEnv";

// resolve keys for the active environment specified in cypress.env.json
const APP = _resolveActiveEnv("app");
const CREDENTIALS = _resolveActiveEnv("credentials");

// construct the URL before passing it to consumers
const endpoint = new URL(APP.url);
endpoint.port = APP.port;

// ---

/**
 * The base at which the app is served
 * e.g. http://localhost:80 or https://example.com:443
 */
export const APP_URL = endpoint.toString();

/**
 * Login credentials
 * @type {string}
 */
export const USERNAME = CREDENTIALS.username;

/**
 * Login credentials
 * @type {string}
 */
export const PASSWORD = CREDENTIALS.password;
