describe('sing In', () => {
  beforeEach(() => {
    cy.visit('https://woloxbooksv3.firebaseapp.com/es/')
  });

  it('should be a successful sign In', () => {
    cy.get('#email').type('jose.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#login').click()
  });

  it('should be a failed login', () => {
    cy.get('#email').type('jose.garcia.garcia@wolox.co')
    cy.get('#password').type('123456')
    cy.get('#login').click()
  });

  it('should not have an empty fields', () => {
    cy.get('#login').should('disabled');
  })

});
