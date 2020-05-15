@regression
Feature: Homepage

   Automated tests for Lola Tech website homepage

   @test
   Scenario: Access the Homepage
      Given I access the URL "https://www.lola.tech"
      When I click on "Latest Jobs Button" from "Home" page