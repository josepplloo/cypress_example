import { WoloxBooks } from '../page-objects/wolox-books-page';

describe('Home data', () => {
  const { loggout, books } = Cypress.env('appComponents');
  const woloxBooks = new WoloxBooks();

  beforeEach(() => {
    woloxBooks.navigate();
    woloxBooks.handleLogIn();
  });

  afterEach(() => cy.get(loggout).click());
 
  it('should have at least one', () => {
    cy.get(books).should('have.length', 5);
  });

  it('shoud change the url path name', () => {
    cy.location('pathname').should('eq', '/es/books');
  });
});
