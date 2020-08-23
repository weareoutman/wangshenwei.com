/// <reference types="Cypress" />

describe('Post', () => {
  it('Go to post page', () => {
    cy.visit('/')
    cy.waitForRouteChange()
    cy.contains("main > article:last-of-type > header > h2 > a", "Markdown").click()
    cy.waitForRouteChange()
    cy.location("pathname").should("equal", "/writing-articles-in-markdown/")
    cy.contains("main > article > header > h1", "Markdown")
  })
})
