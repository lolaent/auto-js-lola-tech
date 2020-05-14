import Page from "../.././generic/pageobjects/generic";
import Hooks from "../../test/hooks/hooks";

class GenericActions extends Page {
  clickOnElement(element, page) {
    let webElement = Hooks.getWebElement(element, page);
    console.log("Clicking on: ", element);
    this.clickElement(webElement); // de discutat
    console.log("Clicked successfully.");
  }
}

export default new GenericActions();
