describe('Home data', () => {
  const { logIn, loggout, books } = Cypress.env('appComponents');
  const { booksUrl, email, password } = Cypress.env('appData');

  beforeEach(() => {
    cy.visit(booksUrl)
    cy.get('input').eq(0).type(email)
    cy.get('input').eq(1).type(password)
    cy.get(logIn).click()
  });
  afterEach(() => cy.get(loggout).click())
 
  it('should have at least one', () => {
    cy.get(books).should('have.length', 5)
  });

  it('shoud change the url path name', () => {
    cy.location('pathname').should('eq', '/es/books')
  })
  
});
