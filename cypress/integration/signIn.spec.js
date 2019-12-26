describe('sing In', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('booksUrl'))
  });

  it('should be a successful sign In', () => {
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login').click()
  });

  it('should be a failed login', () => {
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login').click()
  });

  it('should not have an empty fields', () => {
    cy.get('#login').should('disabled');
  })

});
