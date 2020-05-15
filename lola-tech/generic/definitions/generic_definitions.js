import { When } from "cucumber";
import GenericActions from "../../generic/pageobjects/generic_actions";

When(/^I click on "([^"]*)" from "([^"]*)" page$/, function (element, page) {
  GenericActions.clickElement(element, page);
});

Then(/^The "([^"]*)" from the "([^"]*)" page is displayed$/, function (
  element,
  page
) {
  GenericActions.checkElementIsDisplayed(element, page);
});
