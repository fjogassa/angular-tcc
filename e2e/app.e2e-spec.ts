import { AngularTccPage } from './app.po';

describe('angular-tcc App', () => {
  let page: AngularTccPage;

  beforeEach(() => {
    page = new AngularTccPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
