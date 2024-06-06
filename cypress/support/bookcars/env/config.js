import { _resolveActiveEnv } from "./_resolveActiveEnv";

const FRONTEND = _resolveActiveEnv("frontend");
const BACKEND = _resolveActiveEnv("backend");

/**
 * How long the page typically takes to load and settle
 * @type {number}
 */
export const PAGE_LOAD_TIME = _resolveActiveEnv("__page_load_time") || 1000;

/**
 * Frontend user credentials for the Bookcars app
 * @type {string}
 */
export const FRONTEND_EMAIL = FRONTEND.email;

/**
 * Frontend user credentials for the Bookcars app
 * @type {string}
 */
export const FRONTEND_PASSWORD = FRONTEND.password;

/**
 * The base URL at which the Bookcars frontend is served, e.g. `https://example.com`
 * @type {string}
 */
export const FRONTEND_URL = FRONTEND.url;

/**
 * The port on which the frontend is served.
 * If unsure, use 80 for HTTP and 443 for HTTPS
 * @type {number}
 */
export const FRONTEND_PORT = FRONTEND.port;

/**
 * Backend admin credentials for the Bookcars app
 * @type {string}
 */
export const BACKEND_EMAIL = BACKEND.email;

/**
 * Backend admin credentials for the Bookcars app
 * @type {string}
 */
export const BACKEND_PASSWORD = BACKEND.password;

/**
 * The base URL at which the Bookcars backend is served, e.g. `https://example.com`
 *
 * Do not include a leading `/`, it will probably break something
 * @type {string}
 */
export const BACKEND_URL = BACKEND.url;

/**
 * The port on which the backend is served.
 * @type {number}
 */
export const BACKEND_PORT = BACKEND.port;
