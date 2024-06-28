import * as env from '../env.config';
import { cyGetter } from '../scripts';

export class Home {
  static url = env.APP_URL;

  static visit() {
    return cy.visit(Home.url);
  }

  static get elements() {
    return cyGetter(Home.selectors);
  }

  static get selectors() {
    return {
      header: 'body > div:nth-child(1) > h1:nth-child(1)',
      description: 'body > div:nth-child(1) > p:nth-child(2)',
      moreInformation:
        'body > div:nth-child(1) > p:nth-child(3) > a:nth-child(1)',
    };
  }
}
