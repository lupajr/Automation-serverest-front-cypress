require('@cypress/xpath');

describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('front.serverest.dev')
  })


  it('teste erro ao realizar login', () => {
    cy.xpath('//input[@id="email"]').type('Email@fake.com')
    cy.xpath('//input[@id="password"]').type('Mudar123')
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('//*[@role="alert"]').should('contain.text', 'Email e/ou senha inválidos')
  })

  //TODO - Adicionar BDD ao projeto
  //TODO - Adicionar allure Report
}) 