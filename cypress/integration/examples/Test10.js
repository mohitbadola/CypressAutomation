/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Test Suite', () => {
    it('Handle iframe', () => {
        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(10000)

        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
  })