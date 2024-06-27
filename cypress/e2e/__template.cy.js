import { env } from '../support/__template';

describe('Template', function () {
  before(function () {
    cy.hello('World');
  });

  it('App URL is valid', function () {
    expect(env.APP_URL).to.be.a('string');
    expect(env.APP_URL).to.not.be.empty;
  });

  it('App URL returns a 200 status', function () {
    cy.request(env.APP_URL).then(response => {
      expect(response.status).to.eq(200);
      cy.visit(env.APP_URL);
    });
  });

  it('Username exists', function () {
    expect(env.USERNAME).to.be.a('string');
    expect(env.USERNAME).to.not.be.empty;
  });

  it('Password exists', function () {
    expect(env.PASSWORD).to.be.a('string');
    expect(env.PASSWORD).to.not.be.empty;
  });
});
