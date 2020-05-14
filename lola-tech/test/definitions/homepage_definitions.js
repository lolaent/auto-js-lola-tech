import { Given } from "cucumber";
import HomePage from "../pageobjects/homepage.js";

Given(/^I access the base URL$/, function () {
  HomePage.openURL();
});
