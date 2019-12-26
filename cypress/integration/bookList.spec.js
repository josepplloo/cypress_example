describe('Home data', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('booksUrl'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login').click()
  });
  afterEach(() => cy.get('#loggout').click())
 
  it('should have at least one', () => {
    cy.get('app-book-card').should('have.length', 5)
  });

  it('shoud change the url path name', () => {
    cy.location('pathname').should('eq', '/es/books')
  })
  
});
