/// <reference types="cypress" />

describe('JWT Session', ()=>{
    it('is logged in through local storage', ()=>{
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click();
        cy.contains('button', 'Checkout').click();
        cy.get("[placeholder*='Country']").type('Ind')
        cy.get('.ta-results button').each(($el, $index, $list)=>{
            const actualText = $el.text();
            if(actualText.trim() === "India"){
                cy.wrap($el).click()
            }
        })
        cy.get('.btnn').click();
        cy.wait(4000);
        cy.contains('button', 'Click To Download Order Details in CSV').click();

    })
})