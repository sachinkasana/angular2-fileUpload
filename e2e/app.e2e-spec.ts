import { FileUploadPage } from './app.po';

describe('file-upload App', function() {
  let page: FileUploadPage;

  beforeEach(() => {
    page = new FileUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
