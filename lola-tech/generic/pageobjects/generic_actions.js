import Page from "../.././generic/pageobjects/generic";
import Hooks from "../../test/hooks/hooks";
let assert = require("chai").assert;
let webElement;

class GenericActions extends Page {
  clickElement(element, page) {
    webElement = Hooks.getWebElement(element, page);
    this.waitToBeClickable(webElement);
    console.log(`Clicking on: ${element}`);
    webElement.click();
    console.log(`Clicked successfully.`);
  }

  clickDisabledElement(element, page) {
    webElement = Hooks.getWebElement(element, page);
    webElement.waitForDisplayed();
    webElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    browser.pause(1500);
    webElement.click();
  }

  checkElementIsDisplayed(element, page) {
    webElement = Hooks.getWebElement(element, page);
    console.log(`Checking if ${element} is displayed`);
    assert.isTrue(webElement.isDisplayed(), "The element is not displayed");
    console.log(`The element is displayed`);
  }

  validateText(element, page, expectedText) {
    webElement = Hooks.getWebElement(element, page);
    let actualText = webElement.getText().replace(/(\r\n|\n|\r)/gm, " ");
    assert.equal(
      actualText,
      expectedText,
      "The text is not displayed not incorrect"
    );
  }

  validateMultipleText(page, table) {
    let dataTable = table.hashes(); //returns an array of objects where each row is converted to an object (column header is the key)
    let readTextList = [];
    let textNotMatchList = [];

    let elementList = dataTable.map(({ elementParam }) => elementParam); //Creates a new array with elementsParam, calling data table
    let expectedTextList = dataTable.map(({ expectedText }) => expectedText); //Creates a new array with expectedText, calling data table

    // Get text for each element in an array and pushed in a list
    for (let i = 0; i < elementList.length; i++) {
      webElement = Hooks.getWebElement(elementList[i], page);
      if (webElement === undefined) {
        assert.fail(`The element is not defined on the ${page} page.`);
      }
      readTextList.push(webElement.getText().replace(/(\r\n|\n|\r)/gm, " "));
    }

    //Optimized array comparison function that compares corresponding elements of each array in turn using strict equality
    let i = readTextList.length;
    while (i--) {
      if (readTextList[i] !== expectedTextList[i]) {
        textNotMatchList.push(
          ` Row ${i + 1} reads: "${readTextList[i]}" and expects: "${
            expectedTextList[i]
          }".`
        );
      }
    }

    // Asserts that actual is deeply equal to expected.
    // If case of failing, in the message is injected an array with the rows that doesn't match
    assert.deepEqual(
      readTextList,
      expectedTextList,
      `The following row/s from data table are not as expected: ${textNotMatchList}.`
    );
  }

  validatePageURL(expectedUrl) {
    let actualUrl = browser.getUrl();
    console.log(`Checking if the page URL is: ${expectedUrl}`);
    assert.equal(
      actualUrl,
      expectedUrl,
      "The URL in the address bar does not match the expected URL"
    );
    console.log(`The page URL is the expected one`);
  }

  validateTabTitle(expectedTitle) {
    let actualTitle = browser.getTitle();
    console.log(`Checking if the browser Title is: ${expectedTitle}`);
    assert.equal(
      actualTitle,
      expectedTitle,
      "The browser title is not the expected one"
    );
    console.log(`The browser Title is the expected one`);
  }
}

export default new GenericActions();
