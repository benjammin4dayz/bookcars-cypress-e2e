import { Frontend, Backend } from "../bookcars";

before("Check environment endpoints", () => {
  const notOk = (url) => cy.log(`Failed to reach ${url}`);

  cy.log("Checking environment endpoints before testing...");

  cy.request(Frontend.HomePage.url).then((response) => {
    try {
      expect(response.status).to.eq(200);
    } catch {
      notOk(Frontend.HomePage.url);
    }
  });

  cy.request(Backend.HomePage.url).then((response) => {
    try {
      expect(response.status).to.eq(200);
    } catch {
      notOk(Backend.HomePage.url);
    }
  });
});
