Feature: Search application

    As a guest and As a user
    I want to Search on application

    Scenario: Search data
        Given I open dashboard page
        When I input on Search box and submit enter
        Then I should see search the result what i input on search box