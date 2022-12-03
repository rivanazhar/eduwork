Feature: Search application

    As a guest and As a user
    I want to Search on application

    Scenario: Search data
        Given i open dashboard page
        When i input on Search box and submit
        Then i should see search the result what i input on search box