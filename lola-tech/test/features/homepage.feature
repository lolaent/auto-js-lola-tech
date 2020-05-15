@regression
Feature: Homepage

   Automated tests for Lola Tech website homepage

   @test
   Scenario: Access the Homepage
      Given I access the URL "https://www.lola.tech"
      Then The "Hi message" from the "Home" page is displayed
      And The "Cookie Popup" from the "Home" page is displayed
      When I click on "Latest Jobs Button" from "Home" page