Feature: Login
    Navigate to Basic Login and Login
    
    Scenario: Login Success
        Given Login page appear
        When User fill-in valid username
        And User fill-in valid password
        And Click login button
        Then Successfully login popup appear
        When Click logout button
        Then Successfully logout popup appear

    Scenario: Login Failed
        Given Login page appear
        When User fill-in invalid username
        And User fill-in invalid password
        And Click login button
        Then Unsuccessfully login popup appear