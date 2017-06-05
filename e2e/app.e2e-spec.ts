import { MongodbStatusViewerPage } from './app.po';

describe('mongodb-status-viewer App', () => {
  let page: MongodbStatusViewerPage;

  beforeEach(() => {
    page = new MongodbStatusViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
