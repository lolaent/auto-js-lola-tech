import { Given, Then } from "cucumber";
import HomePage from "../pageobjects/homepage.js";

Given(/^I access the URL "([^"]*)"$/, function(url) {
  HomePage.openURL(url);
});

Then(/^I validate that "([^"]*)" page opens in a new tab$/, function(tab) {
  HomePage.validateNewTab(tab);
});
