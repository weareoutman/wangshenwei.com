/// <reference types="Cypress" />

describe('Post', () => {
  it('Go to 404 page', () => {
    cy.visit('/not-existed-page', { failOnStatusCode: false })
    cy.waitForRouteChange()
    cy.location('pathname').should('equal', '/not-existed-page')
    cy.contains('404 Not Found')
  })
})
