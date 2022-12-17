/// <reference types= "cypress" />

describe('Delete User ', () => {
    it.only('Delete User', () => {

        cy.request('DELETE', 'https:reqres.in/api/users/21').then((response) => {
       
            expect(response.status).equal(204)
            expect(response.headers.connection).equal('keep-alive')
            expect(response.isOkStatusCode).equal(true)
            expect(response.statusText).equal('No Content')
            console.log(response)
            })
        })
    })

    