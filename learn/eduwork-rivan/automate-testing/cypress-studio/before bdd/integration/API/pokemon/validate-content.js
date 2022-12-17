/// <reference types = "cypress" />


describe('Validate header on API', () => {
    it.only('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });
    it.only('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: "ditto"})
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            for (let index = 0; index < response.body.abilities.length; index++) {
                const element = response.body.abilities[index];
                expect(element.ability.name).to.eq(['limber','imposter'][index])
                expect(element.ability.url).to.eq(['https://pokeapi.co/api/v2/ability/7/','https://pokeapi.co/api/v2/ability/150/'][index])
            }
        })
    })
})
