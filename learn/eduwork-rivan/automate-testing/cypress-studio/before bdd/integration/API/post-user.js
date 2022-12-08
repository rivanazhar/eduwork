/// <reference types= "cypress" />

describe('Create New User ', () => {
    it('Add New User', () => {
        let createuser
        var user = {
            "name": 'Rivan Azhar',
            "job": 'Test Engineer'
        } 
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            createuser = response.body
            expect(response.status).equal(201)
            expect(response.body.name).to.eql(user.name)
            expect(response.body.job).to.eql(user.job)   
            })
        })
    })