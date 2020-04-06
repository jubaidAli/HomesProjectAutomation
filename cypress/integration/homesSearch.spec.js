import * as data from "../fixtures/queryLocation.json"

context('Homes Search property test', function() {
    //This will run before each test and verify route
    beforeEach(function() {
        // Give an alias to request
        cy.server()
        .route('GET', Cypress.config().baseurl)
        .as('dataGetFirst')
    })

    //Search and select the 6th listing for Miami
    it('searches Miami location propeties', function() {

        //verify url and search location
        cy.log('Searching the location for Miami')
        cy.searchLocation({location : 'Miami, FL'});
        

        //Verifying the title matches correct location
        cy.log('Verifying the property searched is correct');
        cy.wait(500);
        cy.get('.property-list-title > .title').should('contain', 'Miami, FL');

        //Select 6th element property listing
        cy.log('Clicking 6th property listing');
        cy.get('[data-testid=SR-ListingCellImg-6] > .property-card__result-card-img > .result-card-img-link > .lzy-img--container').click();
        cy.wait(500);
    }),
    
    //Search and select the 6th listing for Los Angeles
    it('searches Los Angeles location propeties', function() {

         //verify url and search location
         cy.log('Searching the location for Log Angeles')
         cy.searchLocation({location : 'Los Angeles, CA'});
 
         //Verifying the title matches correct location
         cy.log('Verifying the property searched is correct');
         cy.wait(500);
         cy.get('.property-list-title > .title').should('contain', 'Los Angeles, CA');
 
         //Select 6th element property listing
         cy.log('Clicking 6th property listing');
         cy.get('[data-testid=SR-ListingCellImg-6] > .property-card__result-card-img > .result-card-img-link > .lzy-img--container').click();
         cy.wait(500);
    }),

    //Search and select the 6th listing for Seattle
    it('searches Seattle location propeties', function() {
         //verify url and search location
         cy.log('Searching the location for Seattle')
         cy.searchLocation({location : 'Seattle, WA'});
 
         //Verifying the title matches correct location
         cy.log('Verifying the property searched is correct');
         cy.wait(500);
         cy.get('.property-list-title > .title').should('contain', 'Seattle, WA');
 
         //Select 6th element property listing
         cy.log('Clicking 6th property listing');
         cy.get('[data-testid=SR-ListingCellImg-6] > .property-card__result-card-img > .result-card-img-link > .lzy-img--container').click();
         cy.wait(500);
    })
});