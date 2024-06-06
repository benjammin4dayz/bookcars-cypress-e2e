describe("Backend Smoke Test", () => {
  beforeEach(() => {
    cy.backendLogin();
  });

  it("Cypress can log in", () => {
    cy.getCookie("bc-x-access-token-backend").should("exist");

    cy.window().then((win) => {
      const user = win.localStorage.getItem("bc-user");
      cy.wrap(user).should("exist");
    });
  });
});

describe("Frontend Smoke Test", () => {
  beforeEach(() => {
    cy.frontendLogin();
  });

  it("Cypress can log in", () => {
    cy.getCookie("bc-x-access-token-frontend").should("exist");

    cy.window().then((win) => {
      const user = win.localStorage.getItem("bc-user");
      cy.wrap(user).should("exist");
    });
  });
});
