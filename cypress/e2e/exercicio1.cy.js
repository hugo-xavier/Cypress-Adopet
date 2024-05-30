describe('Visite a página de principal do AdoPet e validar os headers', () => {
    before(() => {
        cy.visit('/')
    })
    it('Visite a página de principal do AdoPet e clique no botão "Ver pets disponíveis para adoção"', () => {
        cy.get('.button')
            .should('be.visible')
            .invoke('removeAttr', 'href')
            .click()
    })
})    
    describe('Visite a página de principal do AdoPet e teste os botões header', () => {
        beforeEach(() => {
            cy.visit('/home')
        })
        it('Visite a página de /login do Adopet', () => {
            cy.get('.header__user')
            .should('be.visible')
            .click()
            cy.get('.button').should('be.visible').click()
        })
        it('Visite a página de /home do Adopet',() => {
            cy.get('.header__home')
            .should('be.visible')
            .click()
        })
        it.only('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável', () => {
            cy.get('.card__contact')
            // .should ((card__contact ) => { 
                // console.log(card__contact) })
            .eq(0).should('be.visible');
        })

    })

