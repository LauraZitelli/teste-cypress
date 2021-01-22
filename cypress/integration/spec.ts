describe('Firestarter', () => {
  const email = 'Laura';
  const pass = '1234';

  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('has a title', () => {
    cy.contains('Página de Login');
  });
});
