describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate from landing to main page', () => {
    cy.contains('SAPID Research').should('be.visible');
    cy.contains('button', 'Explore').click();
    cy.url().should('include', '/main');
  });

  it('should show mobile menu on small screens', () => {
    cy.viewport('iphone-6');
    cy.get('button[aria-label="Open navigation menu"]')
      .should('be.visible')
      .click();
    cy.contains('Home').should('be.visible');
    cy.contains('Services').should('be.visible');
    cy.contains('Contact').should('be.visible');
  });

  it('should have working skip link for accessibility', () => {
    cy.contains('button', 'Skip to main content')
      .focus()
      .should('be.visible')
      .click();
    cy.get('#main-content').should('have.focus');
  });
});
