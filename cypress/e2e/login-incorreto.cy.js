describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400,
        }).as('stubPost')
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="login-button"]').click();
        cy.get('#email').type('hugo@email,com')
        cy.get('#pass').type('123')
        cy.get('[data-test="submit-button"]').click();
        // cy.get('.error').should('contain.text', 'Por favor, verifique o email digitado')
        // cy.get('.error').should('contain.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
        // cy.contains('Por favor, verifique o email digitado').should('be.visible')
        // cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
        // cy.get('.error').invoke('css', 'color').then((color) => {
        // console.log('A cor do elemento .error é:', color);
        // })
        cy.get('.error').should('have.css', 'color', 'rgb(252, 110, 110)');
        // cy.get('.error').invoke('css', 'color').then((color) => {
        // debugger; // Abre as Ferramentas de Desenvolvedor no ponto de execução
        // Você pode inspecionar a variável color aqui
        // });

    })
    it.only('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.get('[data-test="login-button"]').click();
        cy.login('ana@email.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

})
