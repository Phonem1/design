import { Design1Page } from './app.po';

describe('design1 App', () => {
  let page: Design1Page;

  beforeEach(() => {
    page = new Design1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
