/// <reference types="cypress" />

describe('Test Suite', () => {
    it('Handle Child Windows', () => {
        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then((el)=>{
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get("div .sub-menu-bar a[href*='about']").click()
                cy.url().should('include', '/about');
            })
           
        })
        
    })
  })
