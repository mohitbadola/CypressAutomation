import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";

const homepage = new HomePage();
Given("I am on Ecommerce Page", function () {
  homepage.goTo(Cypress.env("url") + "/loginpagePractise/#");
});

When("I login to the application", function () {
  this.productPage = homepage.login(this.data.username, this.data.password);
  this.productPage.pageValidation();
  this.productPage.getCardCount().should("have.length", 4);
});

When("I login to the application portal", function (dataTable){
  this.productPage = homepage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1]);
  this.productPage.pageValidation();
  this.productPage.getCardCount().should("have.length", 4);
})

When("I add items to Cart and checkout", function () {
  this.productPage.selectProduct(this.data.productName);
  this.productPage.selectFirstProduct();
  this.cartPage = this.productPage.goToCart();
});

When("Validate the total price limit", function () {
  this.cartPage.sumOfProducts().then(function (sum) {
    expect(sum).to.be.lessThan(200000);
  });
});

Then("Select the country submit and verify Thankyou", function () {
  const confirmationPage = this.cartPage.checkOutItems();
  confirmationPage.submitFormDetails();
  confirmationPage.getAlertMessage().should("contain", "Success");
});
