describe('Firestarter', () => {
  const email = 'ValidEmail23';
  const pass = 'ValidPassword23';

  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('has a title', () => {
    cy.contains('Página de Login');
  });
});
