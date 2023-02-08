Feature: Homepage
    Check navigation to homepage and common elements
    Scenario: Check url & title
        Given Navigate to website
        Then Check url
        Then Check title

    Scenario: Check menus
        Given Navigate to website
        Then Check menus