/// <reference types = "cypress" />

describe('Automate testing login dan logout Zero Web App', () => {
    before(() =>{
    });
    it('Kunjungi Situs Zero Web App', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('a[href="/index.html"').should('have.contain', 'Zero Bank')
    });

    it('Display halaman Online Banking', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('h3').should('have.contain', 'Our Bank is trusted by over 1,000,000 customers world wide.')
        cy.get('#account_summary_link').should('have.contain', 'Account Summary')
        cy.get('#onlineBankingMenu').should('be.visible').filter('.active')
    });

    it('Display halaman Feedback', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('have.text', 'Feedback')
        cy.get('.signin-controls').should('be.visible')
    });

    it('Display halaman Homepage', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', '/index.html')
        cy.get('#carousel').should('be.visible')
        cy.get('#homeMenu').should('have.class','active')
    });

});