Feature: Login to Application

    As a valid user
    I want to login into application

    As a invalid user and invalid password
    I cannot login into application

    Scenario: Valid Login
        Given I open login page
        When I input valid user-password and I submit login
        Then I should see homepage

    Scenario: Invalid Login
        Given I open login page
        When I input invalid user-password and I submit login 
        Then I should still on login page