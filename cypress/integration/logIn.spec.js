describe('sing In', () => {
  const { logIn } = Cypress.env('appComponents');
  const { booksUrl, email, password } = Cypress.env('appData');
  beforeEach(() => {
    cy.visit(booksUrl)
  });

  it('should be a successful sign In', () => {
    cy.get('input').eq(0).type(email)
    cy.get('input').eq(1).type(password)
    cy.get(logIn).click()
  });

  it('should be a failed login', () => {
    cy.get('input').eq(0).type(email)
    cy.get('input').eq(1).type(password)
    cy.get(logIn).click()
  });

  it('should not have an empty fields', () => {
    cy.get(logIn).should('disabled');
  })

});
