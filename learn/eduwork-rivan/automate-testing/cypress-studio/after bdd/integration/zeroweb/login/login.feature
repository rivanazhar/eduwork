Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given I open login page
        When I submit login
        Then I should see homepage

    As not valid user 
    I want to login into application

    Scenario: Invalid Login
        Given I open login page
        When i submit login
        Then i should still on login page