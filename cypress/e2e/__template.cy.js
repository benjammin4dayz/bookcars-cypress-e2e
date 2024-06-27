import { env } from '../support/__template';

describe('Template', () => {
  before(() => {
    cy.hello('World');
  });

  it('App URL is valid', () => {
    expect(env.APP_URL).to.be.a('string');
    expect(env.APP_URL).to.not.be.empty;
  });

  it('App URL returns a 200 status', () => {
    cy.request(env.APP_URL).then(response => {
      expect(response.status).to.eq(200);
      cy.visit(env.APP_URL);
    });
  });

  it('Username exists', () => {
    expect(env.USERNAME).to.be.a('string');
    expect(env.USERNAME).to.not.be.empty;
  });

  it('Password exists', () => {
    expect(env.PASSWORD).to.be.a('string');
    expect(env.PASSWORD).to.not.be.empty;
  });
});
