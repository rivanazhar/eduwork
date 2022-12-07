/// <reference types= "cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import searchPage from './searchPage'

Given('I open dashboard page', () => {
    searchPage.visit()
})

When('I input on Search box and submit enter', () =>{
    searchPage.fill_searchbox('keyword')
})

Then('I should see search the result what i input on search box', () => {
    cy.url().should('include', 'search.html')
    cy.get('h2').should('have.contain', 'Search Results:')
    cy.get('.top_offset').should('have.contain', 'were found for the query:')
})