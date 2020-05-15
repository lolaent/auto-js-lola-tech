import Page from "../../generic/pageobjects/generic";
import Utils from "../../generic/pageobjects/utils";

class Hooks extends Page {
  getWebElement(elementName, page) {
    elementName = Utils.formatLocator(elementName);
    if (page === "Home") {
      return {
        latest_jobs_button: $("a[class='jobs nav-jobs w-button']"),
      }[elementName];
    }
  }
}

export default new Hooks();
