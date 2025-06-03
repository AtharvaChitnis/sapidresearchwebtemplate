describe('App', () => {
  it('should load the landing page', () => {
    cy.visit('/');
    cy.contains('SAPID Research').should('be.visible');
  });

  it('should navigate to main page', () => {
    cy.visit('/');
    cy.contains('Explore').click();
    cy.url().should('include', '/main');
  });
});
