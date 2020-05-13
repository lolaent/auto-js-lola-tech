import Page from '../.././generic/pageobjects/generic';



class HomePage extends Page {
  openURL() {
    browser.url("www.lola.tech");
    const logo = $("a[class*='logo-link']");
    console.log(logo);
    logo.click();
    // this.clickElement(logo);

  }

  
}

export default new HomePage();
