/// <reference types = "cypress" />


describe('Validate header on API', () => {
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });
 
});