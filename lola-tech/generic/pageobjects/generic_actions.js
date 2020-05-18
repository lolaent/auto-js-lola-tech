import Page from "../.././generic/pageobjects/generic";
import Hooks from "../../test/hooks/hooks";

class GenericActions extends Page {
  clickElement(element, page) {
    let webElement = Hooks.getWebElement(element, page);
    this.waitToBeClickable(webElement);
    console.log(`Clicking on: ${element}`);
    webElement.click();
    console.log(`Clicked successfully.`);
  }

  clickDisabledElement(element, page) {
    let webElement = Hooks.getWebElement(element, page);
    webElement.waitForDisplayed();
    webElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    browser.pause(1500);
    webElement.click();
  }

  checkElementIsDisplayed(element, page) {
    let webElement = Hooks.getWebElement(element, page);
    console.log(`Checking if ${element} is displayed`);
    expect(webElement).toBeDisplayed();
    console.log(`The element is displayed`);
  }
}

export default new GenericActions();
