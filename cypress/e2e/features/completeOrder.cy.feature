
@regression
Feature: Swag Labs - Saucedemo
I want to
Login
Filter Item
Add to cart
Remove from cart
  Background: Precondition- User should visit site and log in
    Given I login with "standard_user" and "secret_sauce"
    Then I see text "Products"
    

  @addToCart
  Scenario: Add to cart
  Then I see text "Products"
    