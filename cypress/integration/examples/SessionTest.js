/// <reference types="cypress" />
const neatCSV = require('neat-csv')

let productName;

describe('JWT Session', ()=>{
    it('is logged in through local storage', async ()=>{
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then(function(ele){
            productName= ele.text();
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
        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_rahulshetty.csv").
        then(async (text) => {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductCSV = csv[0]["Product Name"];
            expect(productName).to.equal(actualProductCSV);
        })

    })
})