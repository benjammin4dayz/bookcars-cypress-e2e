/**
 * Returns a proxy object where each property of the input object is a selector
 * that is wrapped in a Cypress.Chainable object returned by `cy.get`
 * @param {object} selectors - An object where each property is a CSS selector.
 * @return {proxy<{ [key: string]: Cypress.Chainable }>} A proxy object where each property is a Cypress.Chainable
 * that wraps the corresponding CSS selector.
 */
export function cyGetter(selectors) {
  return new Proxy(selectors, {
    get: (target, prop) => cy.get(target[prop]).then(el => el),
  });
}
