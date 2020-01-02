import { WoloxBooks } from '../page-objects/wolox-books-page';

describe('Home data detail', () => {
  const { loggout, books } = Cypress.env('appComponents');
  const randomBook = Math.floor((Math.random() * 4) + 1);
  const woloxBooks = new WoloxBooks();

  beforeEach(() => {
    woloxBooks.navigate();
    woloxBooks.handleLogIn();
    cy.get(books).eq(randomBook).click();
  });

  afterEach(() => cy.get(loggout).click());

  it('should have a basic info ', () => {
    cy.get('.genre').should('have.length', 1);
    cy.get('.sub-title').should('have.length', 3);
  });

  it('shoud change the url path name', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.match(/^\/\w+\/\w+\/\w+/);
    });
  });
});
