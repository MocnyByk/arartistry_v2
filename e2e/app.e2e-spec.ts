import { AngartistryPage } from './app.po';

describe('angartistry App', function() {
  let page: AngartistryPage;

  beforeEach(() => {
    page = new AngartistryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
