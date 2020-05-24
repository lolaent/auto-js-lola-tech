import Page from "../.././generic/pageobjects/generic";

class HomePage extends Page {
  openURL(url) {
    browser.url(url);
  }

  validateNewTab(tab) {
    browser.switchWindow(tab);
  }
}
export default new HomePage();
