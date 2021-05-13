/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');

    cy.visit('/app/login/');

    // preencher o input usuario
    // document.querySelector('input[name="usuario"]')
    cy.get('#formRegister input[name="usuario"]').type('dafinysouza');

    // preencher o input senha
    cy.get('#formRegister input[name="senha"]').type('senhasegura');

    // clicar no botão de submit!
    cy.get('#formRegister button[type="submit"]').click();

    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/app/profile');

    // Temos o token?
    cy.wait('@userLogin')
      .then((intercept) => {
        // token do servidor
        const { token } = intercept.response.body.data;

        cy.getCookie('APP_TOKEN')
          .should('exist')
        // token do cookie é igual ao do server?
          .should('have.property', 'value', token);
      });
  });
});
