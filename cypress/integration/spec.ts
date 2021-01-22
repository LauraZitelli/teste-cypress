describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Should have a Login title', () => {
    cy.contains('Página de Login');
  });

  it('Should display Error message', () => {
    cy.get('#name').type('InvalidName');
    cy.get('#password').type('InvalidPassword');
    cy.get('#loginButton').click();

    cy.contains('Erro');
  });

  it('Should log into the form page', () => {
    cy.get('#name').type('Laura');
    cy.get('#password').type('1234');
    cy.get('#loginButton').click();

    cy.contains('Cadastro');
  });
});

describe('Form Info', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.get('#name').type('Laura');
    cy.get('#password').type('1234');
    cy.get('#loginButton').click();
  });

  it('Should display success modal', () => {
    cy.get('#email').type('laurazitelli@usp.br');
    cy.get('#password').type('1234');
    cy.get('#checkPassword').type('1234');
    cy.get('#nickname').type('Lau');
    cy.get('#phoneNumber').type('994282377');
    cy.get('#website').type('laura@gmail');

    cy.get('#register').click();
    cy.contains('Informações cadastradas com sucesso!');
  });

  it('Should display table with infos', () => {
    cy.get('#email').type('laurazitelli@usp.br');
    cy.get('#password').type('1234');
    cy.get('#checkPassword').type('1234');
    cy.get('#nickname').type('Lau');
    cy.get('#phoneNumber').type('994282377');
    cy.get('#website').type('laura@gmail');

    cy.get('#register').click();
    cy.contains('Informações');
  });

  it('Should go back to Login Page', () => {
    cy.get('#goBack').click();
    cy.contains('Login');
  });
});
