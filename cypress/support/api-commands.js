Cypress.Commands.add('loginWithToken', () => {
    const email = 'hugo@email.com';
    const password = 'Senha123';

    cy.request({
        method: 'POST',
        url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
        body: {
            mail: email,
            password: password
        },
    }).then(response => {
        if (response.status == 200) {
            let authorizationToken = response.body.token
            Cypress.env("authorizationToken", authorizationToken)
            // cy.log(authorizationToken)
        }
    })
})
