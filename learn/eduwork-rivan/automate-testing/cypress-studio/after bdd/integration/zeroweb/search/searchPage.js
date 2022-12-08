///  <reference types= "cypress" />

const URL ='http://zero.webappsecurity.com/'
const keyword = '#searchTerm'


class searchPage {

    static visit () {
        cy.visit(URL)
    }
    static fill_searchbox(searchkey) {
        cy.get(keyword).type(`${searchkey}{enter}`)
    }
} 
    
    export default searchPage