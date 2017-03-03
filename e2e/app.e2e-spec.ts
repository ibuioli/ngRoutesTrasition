import { NgRoutesTransitionPage } from './app.po';

describe('ng-routes-transition App', () => {
  let page: NgRoutesTransitionPage;

  beforeEach(() => {
    page = new NgRoutesTransitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
