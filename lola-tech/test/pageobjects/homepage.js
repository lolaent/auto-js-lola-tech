import Page from "../.././generic/pageobjects/generic";
class HomePage extends Page {
  openURL(url) {
    browser.url(url);
  }
}
export default new HomePage();
