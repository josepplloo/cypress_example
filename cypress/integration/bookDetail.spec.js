describe('Home data detail', () => {
  const { logIn, loggout, books } = Cypress.env('appComponents');
  const { booksUrl, email, password } = Cypress.env('appData');
  const randomBook = Math.floor((Math.random() * 5) + 1);

  beforeEach(() => {
    cy.visit(booksUrl)
    cy.get('input').eq(0).type(email)
    cy.get('input').eq(1).type(password)
    cy.get(logIn).click()
    cy.get(books).eq(randomBook).click()
  });
  afterEach(() => cy.get(loggout).click());

  it('should have a basic info ', () => {
    cy.get('.genre').should('have.length', 1)
    cy.get('.sub-title').should('have.length', 3)
  });

  it('shoud change the url path name', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.match(/^\/\w+\/\w+\/\w+/)
    });
  });
});
