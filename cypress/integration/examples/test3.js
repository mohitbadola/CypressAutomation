/// <reference types="cypress" />

describe('test suite', ()=>{
    it('test checkboxes and dropdown', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // //check boxes
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        // cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // //Static dropdown
        // cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic dropdown
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($el, $list)=>{
            if($el.text() === 'India'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })
})