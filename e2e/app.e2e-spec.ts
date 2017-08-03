import { CanbanPage } from './app.po';

describe('canban App', () => {
  let page: CanbanPage;

  beforeEach(() => {
    page = new CanbanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
