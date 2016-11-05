import { QCounterPage } from './app.po';

describe('qcounter App', function() {
  let page: QCounterPage;

  beforeEach(() => {
    page = new QCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
