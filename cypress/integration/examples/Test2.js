//cypress - Spec

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Test Suite', () => {
    it('Test placing order', () => {
        //test step
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Parent child chaining
        cy.get('.products').as('productLocator')
      
        cy.get('@productLocator').find('.product').each(($el, $list)=>{
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Capsicum')){
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        cy.get('select').select('India')
        cy.get('.chkAgree').click()
        cy.get('button').click()
    })
  })