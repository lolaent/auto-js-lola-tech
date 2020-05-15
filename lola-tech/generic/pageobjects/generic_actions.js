import Page from "../.././generic/pageobjects/generic";
import Hooks from "../../test/hooks/hooks";

class GenericActions extends Page {
  clickElement(element, page) {
    let webElement = Hooks.getWebElement(element, page);
    this.waitToBeClickable(webElement);
    console.log("Clicking on: ", element);
    webElement.click();
    console.log("Clicked successfully.");
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
    expect(webElement).toBeDisplayed();
  }
}

export default new GenericActions();
