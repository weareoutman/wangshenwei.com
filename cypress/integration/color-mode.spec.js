/// <reference types="Cypress" />

describe('Color Mode', () => {
  it('Toggle color mode', () => {
    cy.visit('/')
    cy.waitForRouteChange()
    cy.get('body').should('have.css', 'backgroundColor', 'rgb(250, 250, 249)')
    cy.contains('header a[role="button"]', 'Dark').as("toggle").click()
    cy.get("@toggle").should("contain.text", "Light")
    cy.get('body').should('have.css', 'backgroundColor', 'rgb(34, 38, 57)')
  })
})
