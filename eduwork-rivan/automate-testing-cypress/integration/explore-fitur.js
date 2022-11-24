/// <reference types = "cypress" />

    describe('Explore Fitur Sauce Demo', () => {
        it('Login menggunakan user yg terdaftar', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.fixture("list-user").then((userdata) => {
            cy.get('#user-name').clear()
            cy.get('#user-name').type(userdata.userid_1.username)
            cy.should('have.value',userdata.userid_1.username)
            cy.get('#password').clear()
            cy.get('#password').type(userdata.userid_1.password)
            cy.should('have.value',userdata.userid_1.password)
            cy.get('#login-button').click()
            cy.url().should('include','/inventory.html')
            });
        });

        it('Sort Produk', () => {
            cy.get('.product_sort_container').should('have.value', 'az').select('za')
            // cy.get('.product_sort_container').select('za')
            cy.get('.product_sort_container').should('have.value', 'za').select('lohi')
            // cy.get('.product_sort_container').select('lohi')
            cy.get('.product_sort_container').should('have.value', 'lohi').select('hilo')
            // cy.get('.product_sort_container').select('hilo')
            cy.get('.product_sort_container').should('have.value', 'hilo')
        });

        it('Masukkan produk ke keranjang', () => {
            cy.contains('Sauce Labs Backpack').click()
            cy.get('#add-to-cart-sauce-labs-backpack').should('have.text','Add to cart').click()
            // cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('#remove-sauce-labs-backpack').should('have.text','Remove')
            cy.get('#back-to-products').click()
            cy.contains('Sauce Labs Bike Light').click()
            cy.get('#add-to-cart-sauce-labs-bike-light').should('have.text','Add to cart').click()
            // cy.get('#add-to-cart-sauce-labs-bike-light').click()
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
        it('Review Produk', () => {
            cy.pause()
            cy.get('#finish').click()
            cy.url().should('include','/checkout-complete.html')
        });

    });