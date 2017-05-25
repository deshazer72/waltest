import { IroAppPage } from './app.po';

describe('iro-app App', () => {
  let page: IroAppPage;

  beforeEach(() => {
    page = new IroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
