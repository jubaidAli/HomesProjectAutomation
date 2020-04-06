// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("searchLocation", ({location}) => {

    // Wait for response.status to be 200
    cy.visit(Cypress.config().baseurl).its('status').should('be', 200);
    //verify title is correct
    cy.title().should('contain', 'Homes.com - Homes for Sale');
    
    //Navigates to search box and enters location
    cy.log('Searching miami location in search box');
    cy.wait(500)
    cy.get('[data-testid=HP-SearchInput]').click().type(location);
    cy.get('[data-testid=HP-SearchBtn]').click();
});
