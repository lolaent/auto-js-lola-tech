class Page {
  waitToBeClickable(webElement) {
    webElement.waitForDisplayed();
    webElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    browser.pause(1500);
    webElement.waitForClickable();
  }
}

export default Page;
