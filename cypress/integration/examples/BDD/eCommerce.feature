Feature: End to end Ecommerce Vaidation

    @Regression
    Scenario: Ecommerce products delivery
        Given I am on Ecommerce Page
        When I login to the application
        And I add items to Cart and checkout
        And Validate the total price limit
        Then Select the country submit and verify Thankyou

    @Smoke
    Scenario Outline: Ecommerce products delivery cucumber driver
        Given I am on Ecommerce Page
        When I login to the application portal
        | username           | password |
        | rahulshettyacademy | learning | 
        And I add items to Cart and checkout
        And Validate the total price limit
        Then Select the country submit and verify Thankyou
