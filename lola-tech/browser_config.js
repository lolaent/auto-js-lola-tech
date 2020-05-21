/* eslint-disable */
module.exports = {
  chrome: {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["disable-dev-shm-usage"],
    },
  },
  chromeResponsive: {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["disable-dev-shm-usage", "window-size=411,731"],
    },
  },
  firefox: {
    browserName: "firefox",
    maxInstances: 5,
  },
  
  firefoxResponsive: {
    browserName: "firefox",
    "moz:firefoxOptions": {
      "prefs": {},
      "log": {
        "level": "trace"
      },
      "args": ["--height=731, width=411"]
    }
  },

  safari: {
    browserName: "safari",
    maxInstances: 5,
  },
  ie: {
    browserName: "internet explorer",
    platform: "",
    version: "",
    acceptUntrustedCertificates: true,
    ignoreProtectedModeSettings: true,
    ignoreZoomSetting: true,
    ensureCleanSession: true,
    maxInstances: 5,
  },
  phantomjs: {
    browserName: "phantomjs",
    platform: "",
    version: "",
    maxInstances: 5,
  },
};
