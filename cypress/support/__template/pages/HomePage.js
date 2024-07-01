import { PageModel } from '../scripts';

export class HomePage extends PageModel {
  constructor(route) {
    super(route);
  }

  get selectors() {
    return {
      header: 'h1',
      description: 'body > :nth-child(1) > :nth-child(2)',
      moreInformation: 'a',
    };
  }
}
