/// <reference types="cypress" />

describe('test suite', ()=>{
    it('test alerts', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Check boxes
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // window:alert
        cy.on('window:alert',(str)=>{
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        
        // //window:confirm
        // cy.on('window:confirm',(str)=>{
        //     // Mocha
        //     expect(str).to.equal('Hello , Are you sure you want to confirm?')
        // })

         //window:false
         cy.on('window:confirm',(str) =>{
            // Assert the alert message
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            // Return false to cancel the confirmation dialog
            return false
          })

    })
})