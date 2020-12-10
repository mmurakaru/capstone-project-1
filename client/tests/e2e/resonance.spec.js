/// <reference types="cypress" />

const testId = (id) => `[data-testid="${id}"]`

describe('resonance', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('resonance', () => {
    it('should open the login page by first load', () => {
      cy.visit('/')
    })
  })
})
