import { McmaklerPage } from './app.po';

describe('mcmakler App', () => {
  let page: McmaklerPage;

  beforeEach(() => {
    page = new McmaklerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
