export class PageHelper {
  /**
   *
   * @param {string} baseUrl The base URL, excluding the route. e.g. `https://example.com`
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * @param {String} route The route, excluding the base url. e.g. `/sign-in`, `/settings`
   * @param {{[key: string]: string}} elements Page object model which has an arbitrary number of key-value pairs, where the key is a string and the value is a string
   */
  create(route, elements = {}) {
    return {
      url: this.baseUrl + route,
      elements: elements,
    };
  }
}
