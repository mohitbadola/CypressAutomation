Feature: End to end Ecommerce Vaidation

Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to Cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thankyou

    Feature Description