/// <reference types = "cypress" />

    describe('Custom Commands Cypress', () => {
        it('Kunjungi situs Zero Webb App', () => {
            cy.visit('http://zero.webappsecurity.com/')
        });
        it('Kunjungi halaman login', () => {
            cy.get('.signin').click()
            cy.url().should('include','/login.html') 
        });

        beforeEach(() => {
            Cypress.Cookies.preserveOnce('JSESSIONID')    
        });
        it('Input username dan password', () => {
            cy.get('#user_login').clear()
            cy.get('#user_password').clear()
            cy.login('username','password')
            cy.url().should('include','/bank/account-summary.html')
        });
  
        it('Kunjungi halaman paybills', () => {
            cy.get('#pay_bills_tab').click()
            cy.url().should('include','/bank/pay-bills.html')
        });

        it('Lakukan pembayaran', () => {
            cy.payment('bofa','Loan', '50.000.000', '21', 'Bayar Pinjol')
            cy.get('#alert_content').should('have.text','The payment was successfully submitted.')
        });

        after(() => {
            cy.clearCookies()
            cy.clearLocalStorage()  
        });
    });