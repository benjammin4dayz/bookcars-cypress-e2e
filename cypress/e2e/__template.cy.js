import { env, Home } from '../support/__template';

describe('Template', () => {
  before(() => {
    cy.hello('World');
  });

  it('App URL is valid', () => {
    expect(Home.url).to.be.a('string').and.not.empty;
  });

  it('App URL returns a 200 status', () => {
    cy.request(Home.url).then(response => {
      expect(response.status).to.eq(200);
      Home.visit();
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
