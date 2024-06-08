import { resolveActiveEnv as resolve } from "./util";

// resolve keys for the active environment specified in cypress.env.json
const APP = resolve("app");
const CREDENTIALS = resolve("credentials");

// construct the URL before passing it to consumers
const endpoint = new URL(APP.url);
endpoint.port = APP.port;

// ---

/**
 * The base at which the app is served
 * e.g. http://localhost:80 or https://example.com:443
 */
export const APP_URL = endpoint.href;

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
