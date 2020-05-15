class Page {
  waitToBeClickable(webElement) {
    webElement.waitForDisplayed();
    webElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    webElement.waitForClickable();
    browser.pause(1500);
  }
}

export default Page;
