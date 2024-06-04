const elements = {
    loginButton: '[data-test="login-button"]',
    emailInput: '#email',
    passwordInput: '#pass',
    submitButton: '[data-test="submit-button"]'
  };

  const fillLoginForm = (email, password) => {
    cy.get(elements.emailInput).type(email);
    cy.get(elements.passwordInput).type(password);
  };
  
  const submitLoginForm = () => {
    cy.get(elements.submitButton).click();
  };
  
  const login = (email, password) => {
    cy.get(elements.loginButton).click();
    fillLoginForm(email, password);
    submitLoginForm();
  };
    
describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.title().should('eq', 'AdoPet')
        
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        login('hugo@email.com', 'Senha123');
        // Adicione aqui asserções adicionais para verificar se a autenticação foi bem-sucedida
      });
    
      it('Deve falhar no login com senha incorreta', () => {
        login('hugo@email.com', 'SenhaIncorreta');
        // Adicione aqui asserções adicionais para verificar se a autenticação falhou
      });
    
      it('Deve falhar no login com email não registrado', () => {
        login('naoexiste@email.com', 'Senha123');
        // Adicione aqui asserções adicionais para verificar se a autenticação falhou
      });
    
})
