import { Frontend } from "../../support/bookcars";

describe("Frontend Template", () => {
  it("Logs in with valid credentials", () => {
    cy.frontendLogin();
    cy.getCookie("bc-x-access-token-frontend").should("exist");
  });

  it("Rejects invalid credentials", () => {
    cy.frontendLogin("fWgol86bxW02FRtlmcEX", "0WiGTVUfBI5WTT8oq6Yr");
    cy.getCookie("bc-x-access-token-frontend").should("not.exist");
  });

  it("Displays the homepage", () => {
    cy.visit(Frontend.HomePage.url);
    cy.get(Frontend.HomePage.elements.logo).should("be.visible");
  });
});
