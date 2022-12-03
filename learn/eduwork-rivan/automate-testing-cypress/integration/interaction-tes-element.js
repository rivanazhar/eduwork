/// <reference types ="cypress" />

    describe('Kunjungi halaman Books Toscrape', () => {
        it('Visit halaman', () => {
            cy.visit('http://books.toscrape.com/index.html', {timeout: 10000}) //buka halaman books.toscrape.com
            cy.url().should('include','index.html') //periksa apakah halaman yg dituju sudah sesuai
        });
        it('Buka category classic, lalu buka buku The Secret Garden', () => {
            cy.get('a').contains('Classics').click()    //buka category clasic
            cy.get('a').contains('The Secret Garden').click() //buka buku the secret garden
        });            
    });

    describe('Kunjungi halaman Zero Web Security', () => {
        it('Visit halaman', () => {
            cy.visit('http://zero.webappsecurity.com/index.html', {timeout:10000}) //buka halaman zero web security
            cy.url().should('include', 'index.html') //perisa apakah halaman yg dituju sudah sesuai
        });      
        it('Visit login', () => { //buka halaman login
            cy.get('.signin').click() //klik tombol signin
        });
        it('Masukan username', () => { 
            cy.get('#user_login').clear()
            cy.get('#user_login').type('username') //masukkan username dengan value "username"
        });
        it('Masukkan password', () => {
            cy.get('#user_password').clear()
            cy.get('#user_password').type('password') //masukkan password dengan value "password"
        });
        it('Ceklis remember me', () => {
            cy.get('.controls [type="checkbox"]') //cari actions control checkbox 
            cy.get('#user_remember_me').check().should('be.checked') //ambil nilai checkbox tersebut lalu ceklis dan periksa hasilnya
        });

    });