import Page from "../.././generic/pageobjects/generic";

class Utils extends Page {
  formatLocator(elementName) {
    return elementName.toLowerCase().replace(/ /g, "_");
  }
}

export default new Utils();
