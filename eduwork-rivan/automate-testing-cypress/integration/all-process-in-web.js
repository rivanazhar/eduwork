/// <reference types = "cypress" />

beforeEach(() => {
    Cypress.Cookies.preserveOnce('session-username')
});

describe('Testing All Fitur Sauce Demo', () => {

    it('Login menggunakan invalid user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("list-user").then((userdata) => {
            
            const invalid_user = userdata.userid_5.username
            const invalid_password = userdata.userid_5.password
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type(invalid_user)
            cy.should('have.value', invalid_user)
            cy.get('#password').clear()
            cy.get('#password').type(invalid_password)
            cy.should('have.value',invalid_password)
            cy.get('#login-button').click()
            cy.get('h3').should('contain.text', 'Username and password do not match any user in this service')
        });
    });

    it('Login menggunakan valid user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("list-user").then((userdata) => {
            
            const valid_user = userdata.userid_1.username
            const valid_password = userdata.userid_1.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(valid_user)
            cy.should('have.value', valid_user)
            cy.get('#password').clear()
            cy.get('#password').type(valid_password)
            cy.should('have.value', valid_password)
            cy.get('#login-button').click()
            cy.url().should('include', '/inventory.html')
        });
    });


    it('Sort Produk', () => {
        cy.get('.product_sort_container').should('have.value', 'az').select('za')
        cy.get('.product_sort_container').should('have.value', 'za').select('lohi')
        cy.get('.product_sort_container').should('have.value', 'lohi').select('hilo')
        cy.get('.product_sort_container').should('have.value', 'hilo')
    });

    it('Membuka Navbar ', () => {
        cy.get('.bm-burger-button').click()
        cy.get('.bm-menu').should('be.visible').and('have.contain', 'Reset App State').and('have.contain', 'Logout')
    });
    it('Fungsi Reset  App', () => {
        cy.get('.bm-cross-button').click()
        cy.get('.bm-menu').should('not.be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').should('have.text','Add to cart').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text','Remove')
        cy.get('.shopping_cart_badge').should('have.contain','1')
        cy.get('.bm-burger-button').click()
        cy.get('.bm-menu').find('#reset_sidebar_link').click()
        cy.get('#shopping_cart_container').should('not.have.class','#shopping_cart_badge').and('not.have.contain', '1')
    });

    it('Masukkan produk ke keranjang', () => {
        cy.contains('Sauce Labs Backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('have.text','Add to cart').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text','Remove')
        cy.get('#back-to-products').click()
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').should('have.text','Add to cart').click()
        cy.get('#remove-sauce-labs-bike-light').should('have.text','Remove')
        cy.get('#shopping_cart_container').click() 
        cy.url().should('include','/cart.html') 
    });

    it('Menghapus produk dari keranjang', () => { 
        cy.get('#remove-sauce-labs-backpack').should('have.text','Remove').click()
        cy.get('#remove-sauce-labs-bike-light').should('have.text','Remove').click()
        cy.url().should('include','/cart.html')
     });

    it('Kembali berbelanja dan checkout', () => {
        cy.get('#continue-shopping').click() 
        cy.contains('Sauce Labs Backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('have.text','Add to cart').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text','Remove')
        cy.get('#back-to-products').click()
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').should('have.text','Add to cart').click()
        cy.get('#remove-sauce-labs-bike-light').should('have.text','Remove')
        cy.get('#back-to-products').click()
        cy.contains('Sauce Labs Onesie').click()
        cy.get('#add-to-cart-sauce-labs-onesie').should('have.text','Add to cart').click()
        cy.get('#remove-sauce-labs-onesie').should('have.text','Remove')
        cy.get('#back-to-products').click()          
        cy.get('#shopping_cart_container').click()
        cy.url().should('include','/cart.html') 
        cy.get('#checkout').click()
        cy.url().should('include','/checkout-step-one.html') 
        
        cy.fixture("list-user").then((userdata) => {
        cy.get('#first-name').type(userdata.userid_5.first_name)
        cy.should('have.value',userdata.userid_5.first_name)
        
        cy.get('#last-name').clear()
        cy.get('#last-name').type(userdata.userid_5.last_name)
        cy.should('have.value',userdata.userid_5.last_name)
        
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(userdata.userid_5.zip_code)
        cy.should('have.value',userdata.userid_5.zip_code)

        cy.get('#continue').click()
        cy.url().should('include','/checkout-step-two.html') 
        })
    });
    it('Review Order Produk', () => {
        cy.pause()
        cy.get('#finish').click()
        cy.url().should('include','/checkout-complete.html')
    });

    it('Logout user', () => {
        cy.get('.bm-burger-button').click()
        cy.get('.bm-menu').find('#logout_sidebar_link').click()
        cy.get('#login_button_container').should('be.visible')
    });
})

after(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
});