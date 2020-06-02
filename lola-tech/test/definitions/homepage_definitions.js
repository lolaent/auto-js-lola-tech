import { Given } from "cucumber";
import HomePage from "../pageobjects/homepage.js";

Given(/^I access the URL "([^"]*)"$/, function(url) {
  HomePage.openURL(url);
});
