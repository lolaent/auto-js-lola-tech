import Page from "../.././generic/pageobjects/generic";

class HomePage extends Page {
  openURL() {
    browser.url("www.lola.tech");
    const logo = $("a[class='jobs nav-jobs w-button']");

    let text = logo.getText();
    console.log(text);
    // this.clickElement(logo);
  }
}

export default new HomePage();
