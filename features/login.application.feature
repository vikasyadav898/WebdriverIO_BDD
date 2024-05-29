Feature: Test login functionality

  Scenario: Verify login with valid username and password
    Given User on the login page
    When User enters correct username and password
    And Clicks on login button
    Then User is should navigate to the login page

  Scenario: Verify login with valid username and invalid password
    Given User on the login page
    When User enters valid username and invalid inpassword
    And Clicks on login button
    Then User is should not navigate to the login page

  Scenario: Verify login with invalid username and valid password
    Given User on the login page
    When User enters invalid username and valid inpassword
    And Clicks on login button
    Then User is should not navigate to the login page
