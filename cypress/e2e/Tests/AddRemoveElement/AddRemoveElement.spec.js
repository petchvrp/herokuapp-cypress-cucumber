import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

before(() => {
    cy.viewport(1600, 720);
    cy.visit('');
});

When('Click AddRemoveElement link', () => {
    cy.wait(3000);
    cy.get('[href="/add_remove_elements/"]').click();
    cy.wait(3000);
});

Then('Navigate to AddRemoveElement page', () => {
    cy.url().should('include', '/add_remove_elements/');
    cy.get('h3').should('contain.text', 'Add/Remove Elements');
});

Then('AddElement button exist', () => {
    cy.get('[onclick="addElement()"]').should('exist');
});

When('Click AddElement button', () => {
    cy.get('[onclick="addElement()"]').should('exist').click();
});

Then('Delete button appear', () => {
    cy.get('[onclick="deleteElement()"]').should('exist');
    cy.get('[id="elements"]').should('exist').should('have.length', 1);
});

When('Click DeleteElement button', () => {
    cy.get('[onclick="deleteElement()"]').should('exist').click();
});

Then('Delete button disappear', () => {
    cy.get('[onclick="deleteElement()"]').should('not.exist');
});