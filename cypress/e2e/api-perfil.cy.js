describe('Api Adopet perfil', () => {
    const authorization = Cypress.env('authorizationToken')
    it('verificar /perfil da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/5c69ed8e-7c0e-4a8e-b14d-d043e1965603',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('hugo lima')
        })
    })
})