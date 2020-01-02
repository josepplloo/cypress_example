import { WoloxBooks } from '../page-objects/wolox-books-page';

describe('sing In', () => {
  const woloxBooks = new WoloxBooks();

  beforeEach(() => {
    woloxBooks.navigate();
  });

  it('should be a successful sign In', () => {
   woloxBooks.handleLogIn();
  });

  it('should be a failed login', () => {
    woloxBooks.handleLogIn({ password: '654321' })
    cy.get('button').should('disabled');
  });

  it('should not have an empty fields', () => {
    cy.get('button').should('disabled');
  })

});
