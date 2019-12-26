describe('signUp', () => {
  beforeEach(() => {
    cy.visit('https://woloxbooksv3.firebaseapp.com/es/')
  });

  it('Succesful sign Up', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('Jose')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#submit_register').click()
  });

  it('needs to fill completly', () => {
    cy.get('#sign-up').click()
    cy.get('#submit_register').should('disabled');
  });

  it('must have a name value', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('{enter}')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#submit_register').should('disabled')
  });

  it('should have a valid name', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('12345')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#submit_register').should('disabled')
  });

  it('should have a valid email', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('Jose')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia')
    cy.get('#password').type('123456')
    cy.get('#submit_register').should('disabled')
  });

  it('should have a strong password', () => {
    cy.get('#sign-up').click()
    cy.get('#firstname').type('Jose')
    cy.get('#lastname').type('Garcia')
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123')
    cy.get('#submit_register').should('disabled')
  });
})