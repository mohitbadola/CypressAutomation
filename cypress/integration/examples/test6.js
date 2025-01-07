/// <reference types="cypress" />

describe('Test Suite', () => {
    it('Should Handle Child Window', () => {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.blinkingText').invoke('removeAttr', 'target').click()
        cy.origin('https://qasummit.org/',()=>{
            cy.get('.hero_heading').should('contain','Welcome to the Career-Focused Software Testing Meetup')
        })
        
    })
  })