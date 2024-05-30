describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.title().should('eq', 'AdoPet')
        
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="login-button"]').click();
        //   cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('#email').type('hugo@email.com')
        //   cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('#pass').type('Senha123')
        cy.get('[data-test="submit-button"]').click();
    })
    it.only('Fazer login usando commands para mais legibilidade de código', () => {
        cy.get('[data-test="login-button"]').click();
        cy.login('hugo@email.com', 'Senha123')
    })
})
