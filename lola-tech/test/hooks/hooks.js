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
          hi_message: $("h2[class='h2 intro_title margin-top h2-covid']"),
          cookie_popup: $("div[id='CybotCookiebotDialog']"),
          covid_banner: $("a[class='link-block link-covid w-inline-block']"),
        }[elementName];
      case "Jobs":
        // code block
        break;
      case "About":
      // code block
      break;
      case "Future-proof":
        return {
          hlo_title: $("h1[class='blurring-title h_title']"),
        }[elementName];
      case "Covid":
        return {
          page_title: $("h2[class='blurring-title h_title']"),
          coronavirus_help_email: $(
            "a[href='mailto:coronavirus-help@lola.tech']"
          ),
          lola_tech_logo: $("a[class='logo-link-new w-nav-brand']"),
        }[elementName];
      default:
        assert.fail(
          `The page argument is not provided or does not exist inside on the Hooks page.`
        );
    }
  }
}

export default new Hooks();
