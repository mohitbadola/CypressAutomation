describe('End to End ecommerce test', ()=>{

    before(function(){                      
        //runs once before all tests in the block
        cy.fixture('example').then((data)=>{
            this.data = data;
        })
    })

    it('Submit Order', function(){

        const productName = this.data.productName
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.contains('Sign In').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)

        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button', 'Add').click()
        })
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()
        
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each($el=>{
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount
        }).then(()=>{
            expect(sum).to.be.lessThan(200000);
        })

        cy.contains('button', 'Checkout').click();
        cy.get('#country').type("India");

        cy.get('.suggestions ul li a', { timeout: 10000 }).click();

        cy.contains('input', 'Purchase').click();
        cy.get('.alert').should('contain', 'Success')

    })
})