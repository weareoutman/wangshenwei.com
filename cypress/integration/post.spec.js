/// <reference types="Cypress" />

describe('Post', () => {
  it('Go to post page', () => {
    cy.visit('/')
    cy.document().its("fonts.status").should("equal", "loaded")
    cy.contains("main > article:last-of-type > header > h2 > a", "Markdown").click()
    cy.location("pathname").should("equal", "/writing-articles-in-markdown/")
    cy.contains("main > article > header > h1", "Markdown")
  })
})
