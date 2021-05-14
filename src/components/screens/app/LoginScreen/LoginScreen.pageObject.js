export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    this.cy.get('#formRegister input[name="usuario"]').type(user);
    this.cy.get('#formRegister input[name="senha"]').type(password);

    return this;
  }

  submitLoginForm() {
    this.cy.get('#formRegister button[type="submit"]').click();

    return this;
  }
}
