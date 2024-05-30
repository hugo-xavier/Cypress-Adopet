describe('Api Adopet', () => {
    const authorization = Cypress.env('authorizationToken')
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/5c69ed8e-7c0e-4a8e-b14d-d043e1965603',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})