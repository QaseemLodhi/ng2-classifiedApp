import { Ng2ClassifiedAppPage } from './app.po';

describe('ng2-classified-app App', function() {
  let page: Ng2ClassifiedAppPage;

  beforeEach(() => {
    page = new Ng2ClassifiedAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
