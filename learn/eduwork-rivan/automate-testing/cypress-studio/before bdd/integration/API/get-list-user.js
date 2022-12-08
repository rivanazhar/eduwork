/// <reference types = "cypress" />

describe('Get User List On Reqres.in', () => {
    it('Verify list user will be displayed', () => {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
});