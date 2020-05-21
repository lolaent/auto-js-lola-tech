@regression
Feature: Homepage

   Automated tests for Lola Tech website homepage

   @test
   Scenario: Access the Homepage
      Given I access the URL "https://lola-tech.webflow.io/"
      Then The "Hi message" from the "Home" page is displayed
      # And The "Cookie Popup" from the "Home" page is displayed (does not work on stage site)
      When I click on the "Latest Jobs button" from the "Home" page

   Scenario: Verify Covid banner redirects to correct page
      Given I access the URL "https://lola-tech.webflow.io/"
      When I click on the "Covid Banner" from the "Home" page
   # Then The user is redirected to "https://lola-tech.webflow.io/covid19-our-bench-is-your-bench"
   # And The title of the "Covid" page tab is "Our bench is your bench: Lola Tech’s response to the Covid-19 situation"
   # And I validate that the "Our bench is your bench: Lola Tech’s response to the Covid-19 situation" text from the "Covid" page is correct
   # And The "Coronavirus help email" from the "Covid" page is clickable

   Scenario: Verify Lola Tech logo redirects to homepage
      Given I access the URL "https://lola-tech.webflow.io/covid19-our-bench-is-your-bench"
      When I click on the "Lola Tech logo" from the "Covid" page
   # Then The user is redirected to "https://lola-tech.webflow.io"
   # And The title of the "Home" page tab is "lola.tech"
   # And The "Hi message" from the "Home" page is displayed

   Scenario: Verify the Digital Experiences and Strategies button redirects to the Digital Experiences page
      Given I access the URL "https://lola-tech.webflow.io/"
   # Then I validate that the "Digital Experiences and Strategies" text from the "Home" page is correct
   # When I click on the "Digital Experiences and Strategies button" from the "Home" page
   # Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-digital-experience-strategy-and-design"
   # And I validate that the "Our web solutions helps you do better business" text from the "Digital Experiences" page is correct
   # And The title of the "Digital Experiences" page tab is "Work With Us. Digital Experiences, Strategy and Design."
   # When I click on the "Read more on how we design link" from the "Digital Experiences" page
   # Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-how-we-design"

   Scenario: Verify the Enterprise Level Software Delivery button redirects to the Software Delivery page
      Given I access the URL "https://lola-tech.webflow.io/"
   # Then I validate that the "Enterprise Level Software Delivery" text from the "Home" page is correct
   # When I click on the "Enterprise Level Software Delivery button" from the "Home" page
   # Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-enterprise-level-software-delivery"
   # And The title of the "Software Delivery" page tab is "Work With Us. Enterprise-level Software Delivery."
   # And I validate that the "You're growing fast. We can help you move even faster." text from the "Software Delivery" page is correct
   # When I click on the "DevOps from the Start link" from the "Software Delivery" page
   # Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-devops-from-the-start"

   Scenario: Verify the Interface Design and Development button redirects to the Software Delivery page
      Given I access the URL "https://lola-tech.webflow.io/"
   # Then I validate that the "Interface Design and Development" text from the "Home" page is correct
   # When I click on the "Interface Design and Development button" from the "Home" page
   # Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-how-we-design"
   # And The title of the "How We Design" page tab is "Work With Us. How We Design."
   # And I validate that the "How We Design." text from the "How We Design" page is correct
   # When I click on the "Digital Experiences and Strategy link" from the "How We Design" page
   # Then The user is redirected to "https://lola-tech.webflow.io/work-with-us-digital-experience-strategy-and-design"

   Scenario: Verify Addresses from Home Page and Join Us Page
      Given I access the URL "https://lola-tech.webflow.io/"
      # Then I validate that the "Lola Tech Cluj-Napoca" text from the "Home" page is correct
      # And I validate that the "+40 740 980 765 Eroilor 14-16, Cluj-Napoca 400129, Romania" text from the "Home" page is correct
      # And The "Cluj Napoca phone number" from the "Home" page is clickable
      # And The "Cluj Napoca address" from the "Home" page is clickable
      # And The "Cluj Napoca address" redirects to "www.google.com"
      # And I validate that the "Lola Tech London" text from the "Home" page is correct
      # And I validate that the "+44 20 7099 7782 1 Mark Square, London EC2A 4EG, UK" text from the "Home" page is correct
      # And The "London phone number" from the "Home" page is clickable
      # And The "London Napoca address" from the "Home" page is clickable
      # And The "London Napoca address" redirects to "www.google.com"
      When I click on the "Join Us button" from the "Home" page
   # Then I validate that the "Lola Tech Cluj-Napoca" text from the "Join Us" page is correct
   # And I validate that the "+40 740 980 765 Eroilor 14-16, Cluj-Napoca 400129, Romania" text from the "Join Us" page is correct
   # And The "Cluj Napoca phone number" from the "Join Us" page is clickable
   # And The "Cluj Napoca address" from the "Join Us" page is clickable
   # And The "Cluj Napoca address" redirects to "www.google.com"
   # And I validate that the "Lola Tech London" text from the "Join Us" page is correct
   # And I validate that the "+44 20 7099 7782 1 Mark Square, London EC2A 4EG, UK" text from the "Join Us" page is correct
   # And The "London phone number" from the "Join Us" page is clickable
   # And The "London Napoca address" from the "Join Us" page is clickable
   # And The "London Napoca address" redirects to "www.google.com"

   Scenario: Validate that "Work schedual system" is clickable
      Given I access the URL "https://lola-tech.webflow.io/case-studies/future-proof-hotel-booking-platform"
      Then I validate that the "HLO title" element from the "Future-proof" page reads "Future-proof hotel booking platform"

   Scenario: Validate multiple text on the Home page
      Given I access the URL "https://lola-tech.webflow.io/"
      Then I validate that the text from "Home" page is correct
         | 0 | elementParam       | expectedText          |
         | 1 | Hi message         | Hi—we’re Lola Tech. |
         | 2 | Latest Jobs button | LATEST JOBS           |
