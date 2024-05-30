Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('[data-test="submit-button"]').click();
})
Cypress.Commands.add('cadastrar', (nome, email, senha) => {
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#pass-create').type(senha)
    cy.get('#pass-confirm').type(senha)
    cy.get('[data-test="submit-button"]').click();
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })