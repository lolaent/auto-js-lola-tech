import { When } from "cucumber";
import GenericActions from "../../generic/pageobjects/generic_actions";

When(/^I click on "([^"]*)" from "([^"]*)" page$/, function (element, page) {
  GenericActions.clickOnElement(element, page);
});