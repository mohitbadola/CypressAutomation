import HomePage from "../../support/pageObjects/HomePage";

describe('End to End ecommerce test', ()=>{

    before(function(){                      
        //runs once before all tests in the block
        cy.fixture('example').then((data)=>{
            this.data = data;
            this.homepage = new HomePage();
        })
    })

    it('Submit Order', function(){

        // Cypress.config('defaultCommandTimeout', 8000)

        const productName = this.data.productName;

        this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#');

        // cy.log(this.data.username);
        
        const productPage = this.homepage.login(this.data.username, this.data.password)
        productPage.pageValidation();
        productPage.verifyCardLimit();
        productPage.selectProduct(productName);
        productPage.selectFirstProduct();

        // cy.pause();

        const cartPage = productPage.goToCart();
        cartPage.sumLessThanLimit();
        const confirmationPage = cartPage.checkOut();
        confirmationPage.submitFormDetails();
        confirmationPage.getAlertMessage();
       

    })
})