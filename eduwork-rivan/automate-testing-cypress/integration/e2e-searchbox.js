/// <reference types = "cypress" />

    describe('E2E Testing Searchbox', () => {
        it('Kunjungi situs Zero Web App', () => {
            cy.visit('http://zero.webappsecurity.com/')
            cy.get('a').should('have.contain', 'Zero Bank')
        });

        it('Lakukan pencarian kata "Online" di searchbox', () => {
            cy.get('#searchTerm').clear()
            cy.get('#searchTerm').type('Online').should('have.value','Online').type('{enter}')
            cy.url().should('include', 'search.html')
        });

        it('Cek hasil pencarian apakah sudah sesuai', () => {
            cy.url().should('include', 'search.html')
            cy.get('h2').should('have.contain', 'Search Results:')
            cy.get('a[href="/online-banking.html"').should('have.contain', 'Zero - Free Access to Online Banking')
            cy.get('a[href="/bank/online-statements.html"').should('have.contain',  'Zero - Online Statements')
        });
    });