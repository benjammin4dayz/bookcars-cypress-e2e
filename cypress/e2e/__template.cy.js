import { env, Home } from '../support/__template';

describe('Template', () => {
  before(() => {
    cy.hello('World');
  });

  it('App URL is valid', () => {
    expect(Home.url).to.be.a('string').and.not.empty;
    expect(() => new URL(Home.url)).to.not.throw();
  });

  it('App URL returns a 200 status', () => {
    cy.request(Home.url).then(response => {
      expect(response.status).to.eq(200);
    });
  });

  it('Credentials exist', () => {
    expect(env.USERNAME).to.be.a('string').and.not.empty;
    expect(env.PASSWORD).to.be.a('string').and.not.empty;
  });

  it('Expected elements exist', () => {
    Home.visit();

    Home.elements.header
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Example Domain');

    Home.elements.description
      .should('exist')
      .and('be.visible')
      .and(
        'have.text',
        'This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.'
      );

    Home.elements.moreInformation
      .should('exist')
      .and('be.visible')
      .and('have.text', 'More information...')
      .and('have.attr', 'href', 'https://www.iana.org/domains/example');
  });
});
