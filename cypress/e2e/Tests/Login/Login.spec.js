import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
    cy.viewport(1600, 720);
    cy.clearCookies();
    cy.visit('/login');
    cy.wait(3000);
    cy.fixture('loginCredential.json').then((loginCredential) => {
        this.loginCredential = loginCredential;
    });
});

Given('Login page appear', () => {
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');
});

When('User fill-in valid username', () => {
    cy.get('[id="username"]').clear().type(this.loginCredential.user);
});

When('User fill-in valid password', () => {
    cy.get('[id="password"]').clear().type(this.loginCredential.password);
});

When('User fill-in invalid username', () => {
    this.loginCredential.user = "invaliduser";
    cy.get('[id="username"]').clear().type(this.loginCredential.user);
});

When('User fill-in invalid password', () => {
    this.loginCredential.password = "invalidpwd";
    cy.get('[id="password"]').clear().type(this.loginCredential.password);
});

When('Click login button', () => {
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
});

When('Click logout button', () => {
    cy.get('[class="icon-2x icon-signout"]').should('be.visible').click();
});

Then('Successfully login popup appear', () => {
    cy.url().should('include', '/secure');
    cy.get('#flash').should('have.class', 'success').contains('You logged into a secure area!');
    cy.get('h2').should('include.text', 'Secure Area');
});

Then('Unsuccessfully login popup appear', () => {
    cy.get('#flash').should('have.class', 'flash error').contains('Your username is invalid!');
});

Then('Successfully logout popup appear', () => {
    cy.url().should('include', '/login');
    cy.get('#flash').should('have.class', 'success').contains('You logged out of the secure area!');
    cy.get('h2').should('include.text', 'Login Page');
});
