import { AngFrontPage } from './app.po';

describe('ang-front App', () => {
  let page: AngFrontPage;

  beforeEach(() => {
    page = new AngFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
