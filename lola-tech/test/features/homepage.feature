@regression
Feature: Homepage

   Automated tests for Lola Tech website homepage

   Scenario: Access the Homepage
      Given I access the URL "https://lola-tech.webflow.io/"
      Then The "Hi message" from the "Home" page is displayed
      # And The "Cookie Popup" from the "Home" page is displayed (does not work on stage site)
      When I click on the "Latest Jobs button" from the "Home" page

# Scenario: Verify Covid banner redirects to the correct page
#    Given I access the URL "https://lola-tech.webflow.io/"
#    When I click on the "Covid Banner" from the "Home" page
#    Then The user is redirected to "https://lola-tech.webflow.io/covid19-our-bench-is-your-bench"
#    And The title of the current page tab is "Our bench is your bench: Lola Tech’s response to the Covid-19 situation"   #####there is no Covid banner on Lola Tech webpage anymore
#    And I validate that the text from "Covid" page is correct
#       | 0 | elementParam | expectedText                                                             |
#       | 1 | Page Title   | Our bench is your bench: Lola Tech’s response to the Covid-19 situation |
#    And The "Coronavirus Help email" from the "Covid" page is displayed

   Scenario: Verify Lola Tech logo redirects to homepage
      Given I access the URL "https://lola-tech.webflow.io/covid19-our-bench-is-your-bench"
      When I click on the "Lola Tech logo" from the "Covid" page
      Then The user is redirected to "https://lola-tech.webflow.io/"
      And The title of the current page tab is "lola.tech"
      And The "Hi message" from the "Home" page is displayed

   Scenario: Verify the Digital Experiences and Strategies button redirects to the Digital Experiences page
      Given I access the URL "https://lola-tech.webflow.io/"
      Then I validate that the text from "Home" page is correct
         | 0 | elementParam                       | expectedText                       |
         | 1 | Digital experiences and strategies | Digital Experiences and Strategies |
      When I click on the "Digital Experiences and Strategies button" from the "Home" page
      Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-digital-experience-strategy-and-design"
      Then I validate that the text from "Digital Experiences" page is correct
         | 0 | elementParam | expectedText                                   |
         | 1 | Page Title   | Our web solutions helps you do better business |
      And The title of the current page tab is "Work With Us: Digital Experience, Strategy and Design"
      When I click on the "Read more on how we design link" from the "Digital Experiences" page
      Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-how-we-design"

   Scenario: Verify the Enterprise Level Software Delivery button redirects to the Software Delivery page
      Given I access the URL "https://lola-tech.webflow.io/"
      Then I validate that the text from "Home" page is correct
         | 0 | elementParam                       | expectedText                       |
         | 1 | Enterprise Level Software Delivery | Enterprise-level Software Delivery |
      When I click on the "Enterprise Level Software Delivery button" from the "Home" page
      Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-enterprise-level-software-delivery"
      Then I validate that the text from "Software Delivery" page is correct
         | 0 | elementParam | expectedText                                           |
         | 1 | Page Title   | You're growing fast. We can help you move even faster. |
      And The title of the current page tab is "Work With Us: Enterprise-Level Software Delivery"
      When I click on the "DevOps from the Start link" from the "Software Delivery" page
      Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-devops-from-the-start"

   Scenario: Verify the Interface Design and Development button redirects to the Software Delivery page
      Given I access the URL "https://lola-tech.webflow.io/"
      Then I validate that the text from "Home" page is correct
         | 0 | elementParam                     | expectedText                     |
         | 1 | Interface Design and Development | Interface Design and Development |
      When I click on the "Interface Design and Development button" from the "Home" page
      Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-how-we-design"
      And The title of the current page tab is "Work With Us: How We Design"
      Then I validate that the text from "How We Design" page is correct
         | 0 | elementParam | expectedText  |
         | 1 | Page Title   | How we design |
      When I click on the "Digital Experiences and Strategy link" from the "How We Design" page
      Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-digital-experience-strategy-and-design"

   Scenario: Verify Addresses from Home Page and Join Us Page
      Given I access the URL "https://lola-tech.webflow.io/"
      Then I validate that the text from "Home" page is correct
         | 0 | elementParam               | expectedText                               |
         | 1 | Cluj Napoca Address Title  | Lola Tech Cluj-Napoca                      |
         | 2 | Cluj Napoca Phone Number   | +40 740 980 765                            |
         | 3 | Cluj Napoca Street Address | Someșului 14, Cluj-Napoca 400145, Romania |
         | 4 | London Address Title       | Lola Tech London                           |
         | 5 | London Phone Number        | +44 20 7099 7782                           |
         | 6 | London Street Address      | 1 Mark Square, London EC2A 4EG, UK         |
      When I click on the "Cluj Napoca Street Address" from the "Home" page
      And I switch to the newly opened tab
      Then The "Close button" from the "Google Maps" page is displayed
      Then The title of the current page tab is "Strada Someșului 14 - Google Maps"
      When I close the current tab
      When I click on the "London Street Address" from the "Home" page
      And I switch to the newly opened tab
      Then The "Close button" from the "Google Maps" page is displayed
      Then The title of the current page tab is "1 Mark Square - Google Maps"
      When I close the current tab
      When I click on the "Join Us button" from the "Home" page
      Then I validate that the text from "Join Us" page is correct
         | 0 | elementParam               | expectedText                               |
         | 1 | Cluj Napoca Address Title  | Lola Tech Cluj-Napoca                      |
         | 2 | Cluj Napoca Phone Number   | +40 740 980 765                            |
         | 3 | Cluj Napoca Street Address | Someșului 14, Cluj-Napoca 400145, Romania |
         | 4 | London Address Title       | Lola Tech London                           |
         | 5 | London Phone Number        | +44 20 7099 7782                           |
         | 6 | London Street Address      | 1 Mark Square, London EC2A 4EG, UK         |
      When I click on the "Cluj Napoca Street Address" from the "Join Us" page
      And I switch to the newly opened tab
      Then The "Close button" from the "Google Maps" page is displayed
      Then The title of the current page tab is "Strada Someșului 14 - Google Maps"
      When I close the current tab
      When I click on the "London Street Address" from the "Home" page
      And I switch to the newly opened tab
      Then The "Close button" from the "Google Maps" page is displayed
      Then The title of the current page tab is "1 Mark Square - Google Maps"
      When I close the current tab

   Scenario: Validate that "Work schedual system" is clickable
      Given I access the URL "https://lola-tech.webflow.io/case-studies/future-proof-hotel-booking-platform"
      Then I validate that the "HLO title" element from the "Future-proof" page reads "Future-proof hotel booking platform"

   Scenario: Validate multiple text on the Home page
      Given I access the URL "https://lola-tech.webflow.io/"
      Then I validate that the text from "Home" page is correct
         | 0 | elementParam       | expectedText          |
         | 1 | Hi message | Hi - we’re Lola Tech. |
         | 2 | Latest Jobs button | LATEST JOBS           |
