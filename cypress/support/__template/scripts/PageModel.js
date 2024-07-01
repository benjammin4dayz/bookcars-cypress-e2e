import { APP_URL } from '../env.config';

class NoInstanceError extends Error {
  constructor(className) {
    super(className);
    this.message = `Cannot instantiate ${className} directly.`;
  }
}

class CyGetter {
  constructor() {
    if (new.target === CyGetter) {
      throw new NoInstanceError(new.target.name);
    }
  }

  /**
   * @returns {Record<string, Cypress.Chainable>} A record where each property is a Cypress.Chainable
   * that wraps the corresponding CSS selector.
   */
  get elements() {
    return new Proxy(this.selectors, {
      get: (target, prop) => cy.get(target[prop]),
    });
  }
  get element() {
    return this.elements;
  }
  get els() {
    return this.elements;
  }
  get el() {
    return this.elements;
  }

  get selectors() {
    return {};
  }
  get selector() {
    return this.selectors;
  }
  get sels() {
    return this.selectors;
  }
  get sel() {
    return this.selectors;
  }
}

export class PageModel extends CyGetter {
  constructor(route) {
    if (new.target === PageModel) {
      throw new NoInstanceError(new.target.name);
    }

    super();

    this.url = new URL(route, APP_URL).href;
  }

  visit = () => cy.visit(this.url);
}
