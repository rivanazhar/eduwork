/// <reference types = "cypress" /> 

describe('Update user data', () => {
    it('Update user', () => {
        var user = {
            "name": 'Azhar',
            "job": 'Engineer manager',
            "id": '21'
        } 
        cy.request('PUT', 'https:reqres.in/api/users/21', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
            expect(response.body.job).to.eq(user.job)
            expect(response.body.id).to.eq(user.id)
            expect(response.body.name).to.not.eq('Rivan Azhar')
            expect(response.body.job).to.not.eq('Testing engineer')
        })
    })
});