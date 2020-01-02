import { WoloxBooks } from '../page-objects/wolox-books-page';

describe('Visual validation for input errors', () => {
  const woloxBooks = new WoloxBooks();
  
  beforeEach(() => {
    woloxBooks.navigate();
    cy.eyesOpen({appName: 'W-Books', batchName: 'W-Books training!'});
    woloxBooks.handleSingUp();
  })
  afterEach(() => cy.eyesClose());

  it('must have an error message', () => {
    cy.eyesCheckWindow('Empty form');
    cy.get('input').first().focus();
    woloxBooks.addLastName('{enter}');
    cy.eyesCheckWindow('Name can not be blank');
  });

  it('should show that user exist already', () => {
    woloxBooks.addName();
    woloxBooks.addLastName();
    woloxBooks.addEmail();
    woloxBooks.addPassword();
    woloxBooks.handleButton();
    woloxBooks.handleButton();
    cy.eyesCheckWindow('form filled');
    cy.wait(2000);
    cy.eyesCheckWindow('duplicate data found');
  });
});
