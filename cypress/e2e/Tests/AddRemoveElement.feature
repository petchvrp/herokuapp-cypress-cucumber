Feature: AddRemoveElement
    Check navigation to Add/Remove Element page and common functions
    
    Scenario: Click Add/Delete Element
        When Click AddRemoveElement link
        Then Navigate to AddRemoveElement page
        Then AddElement button exist
        When Click AddElement button
        Then Delete button appear
        When Click DeleteElement button
        Then Delete button disappear