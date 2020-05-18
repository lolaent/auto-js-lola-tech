import { When, Then } from "cucumber";
import GenericActions from "../../generic/pageobjects/generic_actions";

When(/^I click on the "([^"]*)" from the "([^"]*)" page$/, function (
  element,
  page
) {
  GenericActions.clickElement(element, page);
});

Then(/^The "([^"]*)" from the "([^"]*)" page is displayed$/, function (
  element,
  page
) {
  GenericActions.checkElementIsDisplayed(element, page);
});

Then(/^I validate that the "([^"]*)" element from the "([^"]*)" page reads "([^"]*)"$/, function (
  element,
  page, expectedText
) {
  GenericActions.validateText(element, page, expectedText);
});


