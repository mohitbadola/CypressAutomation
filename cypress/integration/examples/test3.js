/// <reference types="cypress" />

describe('test suite', ()=>{
    it('test checkboxes', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })
})