import {Given } from 'cucumber';
import HomePage from '../pageobjects/homepage.js';


Given(/^I access the base URL$/, async function() {
    HomePage.openURL();
  });

 