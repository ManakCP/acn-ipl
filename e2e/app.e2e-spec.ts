import { AcnAppPage } from './app.po';

describe('acn-app App', () => {
  let page: AcnAppPage;

  beforeEach(() => {
    page = new AcnAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
