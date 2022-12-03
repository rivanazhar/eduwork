/// <reference types = "cypress" />

    describe('Automate testing login dan logout Zero Web App', () => {
        before(() =>{
        });
        it('Kunjungi Situs Zero Web App', () => {
            cy.visit('http://zero.webappsecurity.com/')
            cy.get('a[href="/index.html"').should('have.contain', 'Zero Bank')
        });

        it('Masuk ke halaman login', () => {
            cy.get('.signin').click()
            cy.url().should('include', '/login.html')
            cy.get('h3').should('have.text', 'Log in to ZeroBank')
        });

        it('Login dengan invalid data', () => {
            cy.fixture("userzero").then((userdata) => {
                cy.get('#user_login').clear()
                cy.get('#user_login').type(userdata.invalid_user.username).should('have.value',userdata.invalid_user.username)
                cy.get('#user_password').clear()
                cy.get('#user_password').type(userdata.invalid_user.password).should('have.value', userdata.invalid_user.password)
                cy.contains('Sign in').click()
            })
        });

        it('Tampilkan pesan error', () => {
            cy.get('.alert-error').should('be.visible').and('have.contain', 'Login and/or password are wrong.')
            cy.url().should('include','/login.html?login_error=true')
        });

        it('Login dengan valid data', () => {
            cy.fixture("userzero").then((userdata) => {
                const username = userdata.valid_user.username
                const password = userdata.valid_user.password
            cy.get('#user_login').clear()
            cy.get('#user_login').type(username).should('have.value',username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password).should('have.value',password)
            cy.contains('Sign in').click()
            cy.url().should('include', '/account-summary.html')
            cy.get('ul.nav-tabs').should('be.visible')
            })
        });

        it('Logout halaman', () => {
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.url().should('include', '/index.html')
            cy.get('.signin').should('be.visible')
        });

        after(() => {
            cy.clearCookies()
            cy.clearLocalStorage()  
        });

    });