describe('Visual validation for input errors', () =>{
  const { singUp } = Cypress.env('appComponents');
  const { booksUrl, name, email, password, lastname } = Cypress.env('appData');

 
  beforeEach(() => {
    cy.visit(booksUrl)
    cy.eyesOpen({appName: 'W-Books', batchName: 'W-Books training!'})
  })
  afterEach(() => cy.eyesClose())

  it('must have an error message', () => {
    cy.get(singUp).click()
    cy.eyesCheckWindow('Empty form')
    cy.get('input').first().focus()
    cy.get('input').eq(1).type('{enter}')
    cy.eyesCheckWindow('Name can not be blank')
  });

  it('should show that user exist already', () => {
    cy.get(singUp).click()
    cy.get('input').eq(0).type(name)
    cy.get('input').eq(1).type(lastname)
    cy.get('input').eq(2).type(email)
    cy.get('input').eq(3).type(password)
    cy.eyesCheckWindow('form filled out')
    cy.get('button').click()
    cy.eyesCheckWindow('duplicate data found')
  });
});
