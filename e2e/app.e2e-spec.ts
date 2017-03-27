import { MejorWebappPage } from './app.po';

describe('mejor-webapp App', () => {
  let page: MejorWebappPage;

  beforeEach(() => {
    page = new MejorWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
