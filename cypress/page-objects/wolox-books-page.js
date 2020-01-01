export class WoloxBooks {
  constructor() {
    this.appData = Cypress.env('appData');
    this.appComponents = Cypress.env('appComponents');

  }
  navigate() {
    const { booksUrl } = this.appData;
    cy.visit(booksUrl)
  }
 
  handleSingUp() {
    const { singUp } = this.appComponents; 
    cy.get(singUp).click();
  }

  handleButton() {
    cy.get('button').click()
  }

  addName(name = this.appData.name) {
    cy.get('input').eq(0).type(name);
  }

  addLastName(lastname = this.appData.lastname) {
    cy.get('input').eq(1).type(lastname);
  }

  addEmail(email = this.appData.email) {
    cy.get('input').eq(2).type(email);
  }

  addPassword(password = this.appData.password) {
    cy.get('input').eq(3).type(password);
  }
}
