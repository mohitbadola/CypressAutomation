/// <reference types="cypress" />

describe('Test Suite', () => {
    it('Handle Mouse Hover popups', () => {
        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
        // cy.get('div .mouse-hover-content').invoke('show')
        // cy.contains('Top').click()

        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
        
    })
  })