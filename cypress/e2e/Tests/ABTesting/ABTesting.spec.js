import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

before(() => {
    cy.viewport(1600, 720);
    cy.visit('');
    cy.wait(3000);
});

When('Click ABTesting link', () => {
    cy.get('[href="/abtest"]').click();
    cy.wait(3000);
});

Then('Navigate to ABTesting page', () => {
    cy.url().should('include', '/abtest');
});

Then('Check ABTesting header', () => {
    cy.get('h3').then(($headerText) => {
        const headerText = $headerText.text();
        return (headerText === 'A/B Test Control' || headerText === 'A/B Test Variation 1')
    });
    cy.get('h3').should('contain.text', 'A/B Test');
});