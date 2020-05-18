import Page from "../.././generic/pageobjects/generic";
import Hooks from "../../test/hooks/hooks";
let assert = require('chai').assert


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
    assert.isTrue(webElement.isDisplayed(), "The element is not displayed");
    console.log(`The element is displayed`);
  }

  validateText(element, page, expectedText) {
    let webElement = Hooks.getWebElement(element, page);
    let actualText = webElement.getText().replace(/(\r\n|\n|\r)/gm," ");
    assert.equal(actualText, expectedText, "The text is not displayed not incorrect");
  }
}

export default new GenericActions();
