//cypress - Spec

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test Suite', () => {
    it('Test product search and cart', () => {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products .product').should('have.length', 4)

        // Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)

        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        // cy.get('.products .product').eq(2).contains('ADD TO CART').click()
        // cy.get('.products .product').eq(2).should('contain.text', 'ADDED')

        cy.get('.products .product').each(($el, $list) => {

            const textVeg = $el.find('h4.product-name').text()

            if(textVeg.includes('Capsicum')){
                cy.wrap($el).find('button').click();
            }
        })
        // cy.get('.products .product').eq(2).should('contain.text', 'ADDED')
    })
  })