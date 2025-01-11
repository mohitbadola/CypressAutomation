/// <reference types="cypress" />

let productName;

describe('JWT Session', () => {
  it('is logged in through local storage', () => {
    cy.LoginAPI().then(() => {
      cy.visit('https://rahulshettyacademy.com/client', {
        onBeforeLoad: (window) => {
          window.localStorage.setItem('token', Cypress.env('token'));
        },
      });
    });

    cy.get(".card-body b").eq(1).then((ele) => {
      productName = ele.text();
    });

    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains('button', 'Checkout').click();
    cy.get("[placeholder*='Country']").type('Ind');
    cy.get('.ta-results button').each(($el) => {
      const actualText = $el.text();
      if (actualText.trim() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get('.btnn').click();
    cy.wait(2000);
    cy.contains('button', 'Click To Download Order Details in Excel').click();

    const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_rahulshetty.xlsx";
    
    cy.task('excelToJsonConverter', filePath).then((result) => {
      cy.log(result);
      cy.log(result.data[1].A); //id
      expect(productName).equal(result.data[1].B); 
    });
    
    cy.readFile(filePath).then(function(text){
      expect(text).to.include(productName);
    })
  });
});
