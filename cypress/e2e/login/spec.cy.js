require('@cypress/xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })


  it('teste erro ao realizar login', () => {
    cy.visit('front.serverest.dev')
    cy.xpath('//input[@id="email"]').type('Email@fake.com')
    cy.xpath('//input[@id="password"]').type('Mudar123')
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('//*[@role="alert"]').should('contain.text', 'Email e/ou senha inválidos')
  })
})