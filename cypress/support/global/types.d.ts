declare namespace Cypress {
  interface Chainable {
    /**
     * Sample 'hello world' style command. Uses `cy.log` to say hello!
     * @param name defaults to 'Stranger'
     */
    hello(name?: string): Chainable<void>;
  }
}
