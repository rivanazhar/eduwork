/// <reference types = "cypress" />


describe('Validate response body on API', () => {
    it.only('Get response Body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        
        cy.get('@pokemon').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('game_indices')
        
        cy.get('@pokemon').its('body').its('forms')
            .should('deep.include', {
                "name": "ditto",
                "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
            })
        
        cy.get('@pokemon').its('body.location_area_encounters').should('deep.eq', 'https://pokeapi.co/api/v2/pokemon/132/encounters')
        
        cy.get('@pokemon').its('body.abilities').should('deep.include', {                
                "ability": {
                    "name": "imposter",
                    "url": "https://pokeapi.co/api/v2/ability/150/"
                },
                "is_hidden": true,
                "slot": 3
        })
      })            
    })
});
