import { When, Then } from "cucumber";
import GenericActions from "../../generic/pageobjects/generic_actions";

When(/^I click on the "([^"]*)" from the "([^"]*)" page$/, function(
  element,
  page
) {
  GenericActions.clickElement(element, page);
});

Then(/^The "([^"]*)" from the "([^"]*)" page is displayed$/, function(
  element,
  page
) {
  GenericActions.checkElementIsDisplayed(element, page);
});

Then(
  /^I validate that the "([^"]*)" element from the "([^"]*)" page reads "([^"]*)"$/,
  function(element, page, expectedText) {
    GenericActions.validateText(element, page, expectedText);
  }
);

Then(/^I validate that the text from "([^"]*)" page is correct$/, function(
  page,
  table
) {
  GenericActions.validateMultipleText(page, table);
});

Then(/^The user is redirected to "([^"]*)"$/, function(expectedUrl) {
  GenericActions.validatePageURL(expectedUrl);
});

Then(/^The title of the current page tab is "([^"]*)"$/, function(
  expectedTitle
) {
  GenericActions.validateTabTitle(expectedTitle);
});
