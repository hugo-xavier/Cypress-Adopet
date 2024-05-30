describe('Pagina de cadastro', () => {
  it('Deve preencher os campos de formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('/')
    // cy.get('[data-test="register-button"]').click()
    cy.contains('a', 'Cadastrar').click()
    cy.get('#name').type('Hugo')
    // cy.get('input[name="nome"]').type('Hugo')
    // cy.get('input[name="email"]').type('hugo@email.com');
    cy.get('#email').type('hugo@email.com')
    // cy.get('input[name="password"]').type('Senha123');
    cy.get('#pass-create').type('Senha123')
    // cy.get('input[name="confirm_password"]').type('Senha123');
    cy.get('#pass-confirm').type('Senha123')
    // cy.contains('button', 'Cadastrar').click();
    cy.get('button[type="submit"]').click()
  })
  it.only('Fazer cadastro usando commands para mais legibilidade de código', () => {
    cy.visit('/')
    cy.get('[data-test="register-button"]').click()
    cy.cadastrar('Hugo de Lima', 'hugo@email.com', 'Senha123')
  })
})