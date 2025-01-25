describe('TS File ', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('gmailTest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://google.co.in');
    cy.get(':nth-child(1) > .gb_W').click();
    /* ==== End Cypress Studio ==== */
  });
})