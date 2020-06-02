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
          digital_experiences_and_strategies: $(
            "div[class='div-cards']:first-child h3"
          ),
          digital_experiences_and_strategies_button: $(
            "div[class='div-cards'] a[href='/work-with-us-digital-experience-strategy-and-design']"
          ),
          enterprise_level_software_delivery: $(
            "div[class='div-cards']:nth-child(2) h3"
          ),
          enterprise_level_software_delivery_button: $(
            "div[class='div-cards']:nth-child(2) a"
          ),
          interface_design_and_development: $(
            "div[class='div-cards']:nth-child(3) h3"
          ),
          interface_design_and_development_button: $(
            "div[class='div-cards']:nth-child(3) a"
          ),
          cluj_napoca_address_title: $(
            "div[class='address-block']:nth-child(1) h4"
          ),
          cluj_napoca_phone_number: $("a[href='tel:+40740980765']"),
          cluj_napoca_street_address: $(
            "a[href='https://goo.gl/maps/LQBFBMQ1tfgfFhPc8']"
          ),
          london_address_title: $("div[class='address-block']:nth-child(2) h4"),
          london_phone_number: $("a[href='tel:+442070997782']"),
          london_street_address: $(
            "a[href='https://goo.gl/maps/rQ5vduEZNvUUSLdL8']"
          ),
          join_us_button: $("a[href='/join-us']"),
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
      case "Digital Experiences":
        return {
          page_title: $("h1[class='blurring-title h_title']"),
          read_more_on_how_we_design_link: $("div[class='text-block']"),
        }[elementName];
      case "Covid":
        return {
          page_title: $("h2[class='blurring-title h_title']"),
          coronavirus_help_email: $(
            "a[href='mailto:coronavirus-help@lola.tech']"
          ),
          lola_tech_logo: $("a[class='logo-link-new w-nav-brand']"),
        }[elementName];
      case "Software Delivery":
        return {
          page_title: $("h1[class='blurring-title h_title']"),
          devops_from_the_start_link: $("div[class='page-nav-container'] "),
        }[elementName];
      case "How We Design":
        return {
          page_title: $("h1[class='blurring-title h_title']"),
          digital_experiences_and_strategy_link: $(
            "div[class='page-nav-container']"
          ),
        }[elementName];

      case "Join Us":
        return {
          cluj_napoca_address_title: $(
            "div[class='address-block']:nth-child(1) h4"
          ),
          cluj_napoca_phone_number: $("a[href='tel:+40740980765']"),
          cluj_napoca_street_address: $(
            "a[href='https://goo.gl/maps/LQBFBMQ1tfgfFhPc8']"
          ),
          london_address_title: $("div[class='address-block']:nth-child(2) h4"),
          london_phone_number: $("a[href='tel:+442070997782']"),
          london_street_address: $(
            "a[href='https://goo.gl/maps/rQ5vduEZNvUUSLdL8']"
          ),
          join_with_us_button: $("a[href='/join-us']"),
        }[elementName];

      default:
        assert.fail(
          `The page argument is not provided or does not exist inside on the Hooks page.`
        );
    }
  }
}

export default new Hooks();
