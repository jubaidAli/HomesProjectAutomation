# HomesProjectAutomation

Automation framework using Cypress.io and Javascript for end to end testing

This is an automation framework for end to end testing using Cypress to automate the user searching different locations.

To use the application, open the project in Visual Studio Editor or any favorite editor that can handle javascript libraries.

========= Assuming user is in the main project directory (HomesProject) =========

Install Cypress on your machine by running 'npm install --save-dev cypress' in terminal

Then run the command 'npm install' to get all the dependencies in package.json

All the tests are in the integration directory, to run your tests, enter 'npx cypress open' in terminal

A cypress dashboard should appear, click on the homesSearch.spec.js, your test should begin to run on Electron browser (chrome).

If you would like to run the test in headless mode, use the command 'npm run cy:run' in terminal 

================================================================================================
