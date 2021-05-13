/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
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
  });
});
