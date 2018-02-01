import { PepperAppPage } from './app.po';

describe('pepper-app App', function() {
  let page: PepperAppPage;

  beforeEach(() => {
    page = new PepperAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
