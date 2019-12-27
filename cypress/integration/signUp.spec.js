describe('signUp', () => {
  const { singUp } = Cypress.env('appComponents');
  const { booksUrl, name, lastname, email, password } = Cypress.env('appData');

  beforeEach(() => {
    cy.visit(booksUrl)
  });

  it('should be a successful sign Up', () => {
    cy.get(singUp).click()
    cy.get('input').eq(0).type(name)
    cy.get('input').eq(1).type(lastname)
    cy.get('input').eq(2).type(email)
    cy.get('input').eq(3).type(password)
    cy.get('button').click()
  });

  it('should need to be fill completely', () => {
    cy.get(singUp).click()
    cy.get('button').should('disabled');
  });

  it('must have a value in name field', () => {
    cy.get(singUp).click()
    cy.get('input').eq(0).type('{enter}')
    cy.get('input').eq(1).type(lastname)
    cy.get('input').eq(2).type(email)
    cy.get('input').eq(3).type(password)
    cy.get('button').should('disabled')
  });

  it('should have a valid name', () => {
    cy.get(singUp).click()
    cy.get('input').eq(0).type('12345')
    cy.get('input').eq(1).type(lastname)
    cy.get('input').eq(2).type(email)
    cy.get('input').eq(3).type(password)
    cy.get('button').should('disabled')
  });

  it('should have a valid email', () => {
    cy.get(singUp).click()
    cy.get('input').eq(0).type('Jose')
    cy.get('input').eq(1).type(lastname)
    cy.get('input').eq(2).type('jose.garcia')
    cy.get('input').eq(3).type(password)
    cy.get('button').should('disabled')
  });

  it('should have a strong password', () => {
    cy.get(singUp).click()
    cy.get('input').eq(0).type('Jose')
    cy.get('input').eq(1).type(lastname)
    cy.get('input').eq(2).type(email)
    cy.get('input').eq(3).type('123')
    cy.get('button').should('disabled')
  });
})