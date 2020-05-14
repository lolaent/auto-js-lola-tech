import Page from "../.././generic/pageobjects/generic";

class Utils extends Page {
  formatLocator(elementName) {
    let _element = elementName.toLowerCase().replace(/ /g, "_");
    return _element;
  }
}

export default new Utils();
