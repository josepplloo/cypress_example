describe('Visual validation for input errors', () =>{
  const { singUp } = Cypress.env('appComponents');
  const { booksUrl } = Cypress.env('appData');

  before(() => cy.visit(booksUrl));
  beforeEach(() => cy.eyesOpen({appName: 'W-Books', batchName: 'W-Books training!'}))
  afterEach(() => cy.eyesClose())

  it('must have an error message', () => {
    cy.get(singUp).click()
    cy.eyesCheckWindow('Empty form')
    cy.get('input').first().focus()
    cy.get('input').eq(1).type('{enter}')
    cy.eyesCheckWindow('Name can not be blank')
  });
});
