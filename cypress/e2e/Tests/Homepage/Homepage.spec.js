import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

before(() => {
    cy.viewport(1600, 720);
});

Given("Navigate to website", () => {
    cy.visit('');
    cy.wait(3000);
});

Then('Check url', () => {
    cy.url().should('include', 'the-internet');
    cy.url().should('include', 'heroku');
});

Then('Check title', () => {
    cy.title().should('include', 'The Internet');
});

Then('Check menus', () => {
    cy.get('[href="/abtest"]').should('exist').and('have.text', 'A/B Testing');
    cy.get('[href="/add_remove_elements/"]').should('exist').and('have.text', 'Add/Remove Elements');
    cy.get('[href="/basic_auth"]').should('exist').and('have.text', 'Basic Auth');
    cy.get('[href="/broken_images"]').should('exist').and('have.text', 'Broken Images');
    cy.get('[href="/challenging_dom"]').should('exist').and('have.text', 'Challenging DOM');
    cy.get('[href="/checkboxes"]').should('exist').and('have.text', 'Checkboxes');
    cy.get('[href="/context_menu"]').should('exist').and('have.text', 'Context Menu');
    cy.get('[href="/digest_auth"]').should('exist').and('have.text', 'Digest Authentication');
    cy.get('[href="/disappearing_elements"]').should('exist').and('have.text', 'Disappearing Elements');
    cy.get('[href="/drag_and_drop"]').should('exist').and('have.text', 'Drag and Drop');
    cy.get('[href="/dropdown"]').should('exist').and('have.text', 'Dropdown');
    cy.get('[href="/dynamic_content"]').should('exist').and('have.text', 'Dynamic Content');
    cy.get('[href="/dynamic_controls"]').should('exist').and('have.text', 'Dynamic Controls');
    cy.get('[href="/dynamic_loading"]').should('exist').and('have.text', 'Dynamic Loading');
    cy.get('[href="/entry_ad"]').should('exist').and('have.text', 'Entry Ad');
    cy.get('[href="/exit_intent"]').should('exist').and('have.text', 'Exit Intent');
    cy.get('[href="/download"]').should('exist').and('have.text', 'File Download');
    cy.get('[href="/upload"]').should('exist').and('have.text', 'File Upload');
    cy.get('[href="/floating_menu"]').should('exist').and('have.text', 'Floating Menu');
    cy.get('[href="/forgot_password"]').should('exist').and('have.text', 'Forgot Password');
    cy.get('[href="/login"]').should('exist').and('have.text', 'Form Authentication');
    cy.get('[href="/frames"]').should('exist').and('have.text', 'Frames');
    cy.get('[href="/geolocation"]').should('exist').and('have.text', 'Geolocation');
    cy.get('[href="/horizontal_slider"]').should('exist').and('have.text', 'Horizontal Slider');
    cy.get('[href="/hovers"]').should('exist').and('have.text', 'Hovers');
    cy.get('[href="/infinite_scroll"]').should('exist').and('have.text', 'Infinite Scroll');
    cy.get('[href="/inputs"]').should('exist').and('have.text', 'Inputs');
    cy.get('[href="/jqueryui/menu"]').should('exist').and('have.text', 'JQuery UI Menus');
    cy.get('[href="/javascript_alerts"]').should('exist').and('have.text', 'JavaScript Alerts');
    cy.get('[href="/javascript_error"]').should('exist').and('have.text', 'JavaScript onload event error');
    cy.get('[href="/key_presses"]').should('exist').and('have.text', 'Key Presses');
    cy.get('[href="/large"]').should('exist').and('have.text', 'Large & Deep DOM');
    cy.get('[href="/windows"]').should('exist').and('have.text', 'Multiple Windows');
    cy.get('[href="/nested_frames"]').should('exist').and('have.text', 'Nested Frames');
    cy.get('[href="/notification_message"]').should('exist').and('have.text', 'Notification Messages');
    cy.get('[href="/redirector"]').should('exist').and('have.text', 'Redirect Link');
    cy.get('[href="/download_secure"]').should('exist').and('have.text', 'Secure File Download');
    cy.get('[href="/shadowdom"]').should('exist').and('have.text', 'Shadow DOM');
    cy.get('[href="/shifting_content"]').should('exist').and('have.text', 'Shifting Content');
    cy.get('[href="/slow"]').should('exist').and('have.text', 'Slow Resources');
    cy.get('[href="/tables"]').should('exist').and('have.text', 'Sortable Data Tables');
    cy.get('[href="/status_codes"]').should('exist').and('have.text', 'Status Codes');
    cy.get('[href="/typos"]').should('exist').and('have.text', 'Typos');
    cy.get('[href="/tinymce"]').should('exist').and('have.text', 'WYSIWYG Editor');
});

