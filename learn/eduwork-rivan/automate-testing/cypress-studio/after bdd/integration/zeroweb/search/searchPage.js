///  <reference types= "cypress" />

const URL ='http://zero.webappsecurity.com/'
const keyword = '#searchTerm'


class searchPage {

    static visit () {
        cy.visit(URL)
    }
    static fill_searchbox() {
        cy.get(keyword).type('flip{enter}')
    }
} 
    
    export default searchPage