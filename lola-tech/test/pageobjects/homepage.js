import Page from "../.././generic/pageobjects/generic";

class HomePage extends Page {
  openURL() {
    browser.url("www.lola.tech");
    const logo = $("a[class='jobs nav-jobs w-button']");

    logo.getText();
    console.log(logo);
    // this.clickElement(logo);
  }
}

export default new HomePage();
