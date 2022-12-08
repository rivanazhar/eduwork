/// <reference types="cypress" />

describe('Tugas tes scripts', () => {
    it('clicking "type" show the rights headings', () => {
        cy.visit('https://example.cypress.io') //membuka halaman example cypress
        cy.pause() //pause test sementara
        cy.contains('type').click() // cari elemen type di halaman cypress lalu klik elemen tersebut

        cy.url().should('include', '/commands/actions') //fungsi assertion kunjungi halaman yg sudah ada di cy.visit (example.cypress.io) lalu kunjungi hal commands/actions di dalam halaman tersebut
        cy.get('.action-email') //cari apakah dihalaman example.cypress.io/commands/actions ada form action input email? 
        .type('rivanazhar@gmail.com') // jika ada tuliskan rivanazhar@gmail.com
        .should('have.value','rivanazhar@gmail.com') //periksa hasilya, harus sama dengan yg di input 
    });
});