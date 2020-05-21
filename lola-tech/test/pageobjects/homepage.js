import Page from "../.././generic/pageobjects/generic";
class HomePage extends Page {
  openURL(url) {
    browser.setWindowSize(350, 810);
    browser.url(url);
  }
}
export default new HomePage();
