describe('signUp', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('booksUrl'))
  });

  it('should be a Successful sign Up', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type(Cypress.env('name'))
    cy.get('#lastname').type(Cypress.env('lastname'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#submit_register').click()
  });

  it('should need to be fill completely', () => {
    cy.get('#sign-up').click()
    cy.get('#submit_register').should('disabled');
  });

  it('must have a value in name field', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('{enter}')
    cy.get('#lastname').type(Cypress.env('lastname'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#submit_register').should('disabled')
  });

  it('should have a valid name', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('12345')
    cy.get('#lastname').type(Cypress.env('lastname'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#submit_register').should('disabled')
  });

  it('should have a valid email', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('Jose')
    cy.get('#lastname').type(Cypress.env('lastname'))
    cy.get('#email').type('jose.garcia')
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#submit_register').should('disabled')
  });

  it('should have a strong password', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('Jose')
    cy.get('#lastname').type(Cypress.env('lastname'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type('123')
    cy.get('#submit_register').should('disabled')
  });
})