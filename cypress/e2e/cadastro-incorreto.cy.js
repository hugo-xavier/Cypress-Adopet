describe('Página de cadastro incorreto opção 1', () => {
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.visit('/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    })
})

describe('Página de cadastro incorreto opção 2', () => {
    it.only('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.visit('/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="submit-button"]').click();
        cy.get('.error').should('have.css', 'color', 'rgb(252, 110, 110)');
        cy.get('.error').should('contain.text', 'É necessário informar um endereço de email')
        cy.get('.error').should('contain.text', 'Crie uma senha')
        cy.get('.error').should('contain.text', 'Repita a senha criada acima')
    })
})

describe('Página de cadastro', () => {
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    })
})

