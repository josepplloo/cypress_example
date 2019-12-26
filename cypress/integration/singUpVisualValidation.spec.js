describe('Visual validation for input errors', () =>{
  before(() => cy.visit('https://woloxbooksv3.firebaseapp.com/es/'));
  beforeEach(() => cy.eyesOpen({appName: 'W-Books', batchName: 'W-Books training!'}))
  afterEach(() => cy.eyesClose())

  it('must have an error message', () => {
    cy.get('#sign-up').click()
    cy.eyesCheckWindow('Empty form')
    cy.get('input').first().focus()
    cy.get('#lastname').type('{enter}')
    cy.eyesCheckWindow('Name can not be blank')
  });
});
