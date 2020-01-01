import { WoloxBooks } from '../page-objects/wolox-books-page';

describe('signUp', () => {
  const woloxBooks = new WoloxBooks();

  beforeEach(() => {
    woloxBooks.navigate();
    woloxBooks.handleSingUp();
  });

  it('should be a successful sign Up', () => {
    woloxBooks.addName()
    woloxBooks.addLastName()
    woloxBooks.addEmail()
    woloxBooks.addPassword()
    woloxBooks.handleButton()
  });

  it('should need to be fill completely', () => {
    cy.get('button').should('disabled');
  });

  it('must have a value in name field', () => {
    woloxBooks.addName('{enter}')
    woloxBooks.addLastName()
    woloxBooks.addEmail()
    woloxBooks.addPassword()
    cy.get('button').should('disabled')
  });

  it('should have a valid name', () => {
    woloxBooks.addName('12345')
    woloxBooks.addLastName()
    woloxBooks.addEmail()
    woloxBooks.addPassword()
    cy.get('button').should('disabled')
  });

  it('should have a valid email', () => {
    woloxBooks.addName()
    woloxBooks.addLastName()
    woloxBooks.addEmail('invalidMail.com')
    woloxBooks.addPassword()
    cy.get('button').should('disabled')
  });

  it('should have a strong password', () => {
    woloxBooks.addName()
    woloxBooks.addLastName()
    woloxBooks.addEmail()
    woloxBooks.addPassword('123')
    cy.get('button').should('disabled')
  });
})