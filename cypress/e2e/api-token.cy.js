describe('Salvando token', () => {
    it('Verificar se está pegando o token automaticamente', () => {
        cy.request({
            method: 'POST',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
            body: {
                email: 'hugo@email.com',
                password: 'Senha123'
            },
        }).then(response => { 
            if(response.status == 200){
                let authorizationToken = response.body.token
                Cypress.env("authorizationToken", authorizationToken)
                cy.log(authorizationToken)
            }
        })   
    })
})


it('Passando o comandos de token', () => {
    cy.loginWithToken()
})