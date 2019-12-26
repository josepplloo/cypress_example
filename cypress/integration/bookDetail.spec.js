describe('Home data detail', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('booksUrl'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login').click()
    cy.get('#book_item').click()
  });
  afterEach(() => cy.get('#loggout').click())

  it('should have at least one', () => {
    cy.get('.genre').should('have.length', 1)
    cy.get('.sub-title').should('have.length', 3)
  });

  it('shoud change the url path name', () => {
    cy.location('pathname').should('eq', '/es/books/18')
  })
  
});