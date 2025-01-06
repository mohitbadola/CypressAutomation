//cypress - Spec

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test Suite', () => {
    it('My First Test case', () => {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

    })
  })