  class Page {
  
  /**
   * This function checks locator type and converts it to $(element) if locator type is string
   * @param { String } element can be string or locator object ($)
   * @return { any }
   */
  getElement(element) {
    if (typeof element === 'string') {
      return $(locator);
    } else {
      return locator;
    }}

  waitToBeClickable(locator) {
    locator.waitForDisplayed();
    locator.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    locator.waitForClickable();
    browser.pause(1500);
      }
/**
 * 
 * @param {string} element This can be a locator which is either initialized or just a string
 */
clickElement(element){
// let locator = this.getElement(element)
let locator = $(element);
console.log('clicking on element: ' + element);
// this.waitToBeClickable(locator);
console.log('clicking on locator: ' + locator);
locator.click();
}

clickDisabledElement(element){
    let locator = this.getElement(element)
    locator.waitForDisplayed()
    locator.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      browser.pause(1500);
    locator.click()
    }

  




  }

export default Page;