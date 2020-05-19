import Page from "../../generic/pageobjects/generic";
import Utils from "../../generic/pageobjects/utils";
let assert = require("chai").assert;

class Hooks extends Page {
  getWebElement(elementName, page) {
    elementName = Utils.formatLocator(elementName);

    switch (page) {
      case "Home":
        return {
          latest_jobs_button: $("a[class='jobs nav-jobs w-button']"),
          hi_message: $("h1[class='blurring-title h_homepage']"),
          cookie_popup: $("div[id='CybotCookiebotDialog']"),
        }[elementName];
      case "Jobs":
        // code block
        break;
      case "About":
      // code block
      case "Future-proof":
        return {
          hlo_title: $("h1[class='blurring-title h_title']"),
        }[elementName];
      default:
        assert.fail(
          `The page argument is not provided or does not exist inside on the Hooks page.`
        );
    }
  }
}

export default new Hooks();
