import { Given, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.viewport(1600, 720);
});

Given("Navigate to website", () => {
    cy.visit('');
});

Then('Check url', () => {
    cy.url().should('include', 'the-internet');
    cy.url().should('include', 'heroku');
});

Then('Check title', () => {
    cy.title().should('include', 'The Internet');
});

Then('Check menus', () => {
    cy.get('[href="/abtest"]').should('exist').should('have.text', 'A/B Testing');
    cy.get('[href="/add_remove_elements/"]').should('exist').should('have.text', 'Add/Remove Elements');
    cy.get('[href="/basic_auth"]').should('exist').should('have.text', 'Basic Auth');
    cy.get('[href="/broken_images"]').should('exist').should('have.text', 'Broken Images');
    cy.get('[href="/challenging_dom"]').should('exist').should('have.text', 'Challenging DOM');
    cy.get('[href="/checkboxes"]').should('exist').should('have.text', 'Checkboxes');
    cy.get('[href="/context_menu"]').should('exist').should('have.text', 'Context Menu');
    cy.get('[href="/digest_auth"]').should('exist').should('have.text', 'Digest Authentication');
    cy.get('[href="/disappearing_elements"]').should('exist').should('have.text', 'Disappearing Elements');
    cy.get('[href="/drag_and_drop"]').should('exist').should('have.text', 'Drag and Drop');
    cy.get('[href="/dropdown"]').should('exist').should('have.text', 'Dropdown');
    cy.get('[href="/dynamic_content"]').should('exist').should('have.text', 'Dynamic Content');
    cy.get('[href="/dynamic_controls"]').should('exist').should('have.text', 'Dynamic Controls');
    cy.get('[href="/dynamic_loading"]').should('exist').should('have.text', 'Dynamic Loading');
    cy.get('[href="/entry_ad"]').should('exist').should('have.text', 'Entry Ad');
    cy.get('[href="/exit_intent"]').should('exist').should('have.text', 'Exit Intent');
    cy.get('[href="/download"]').should('exist').should('have.text', 'File Download');
    cy.get('[href="/upload"]').should('exist').should('have.text', 'File Upload');
    cy.get('[href="/floating_menu"]').should('exist').should('have.text', 'Floating Menu');
    cy.get('[href="/forgot_password"]').should('exist').should('have.text', 'Forgot Password');
    cy.get('[href="/login"]').should('exist').should('have.text', 'Form Authentication');
    cy.get('[href="/frames"]').should('exist').should('have.text', 'Frames');
    cy.get('[href="/geolocation"]').should('exist').should('have.text', 'Geolocation');
    cy.get('[href="/horizontal_slider"]').should('exist').should('have.text', 'Horizontal Slider');
    cy.get('[href="/hovers"]').should('exist').should('have.text', 'Hovers');
    cy.get('[href="/infinite_scroll"]').should('exist').should('have.text', 'Infinite Scroll');
    cy.get('[href="/inputs"]').should('exist').should('have.text', 'Inputs');
    cy.get('[href="/jqueryui/menu"]').should('exist').should('have.text', 'JQuery UI Menus');
    cy.get('[href="/javascript_alerts"]').should('exist').should('have.text', 'JavaScript Alerts');
    cy.get('[href="/javascript_error"]').should('exist').should('have.text', 'JavaScript onload event error');
    cy.get('[href="/key_presses"]').should('exist').should('have.text', 'Key Presses');
    cy.get('[href="/large"]').should('exist').should('have.text', 'Large & Deep DOM');
    cy.get('[href="/windows"]').should('exist').should('have.text', 'Multiple Windows');
    cy.get('[href="/nested_frames"]').should('exist').should('have.text', 'Nested Frames');
    cy.get('[href="/notification_message"]').should('exist').should('have.text', 'Notification Messages');
    cy.get('[href="/redirector"]').should('exist').should('have.text', 'Redirect Link');
    cy.get('[href="/download_secure"]').should('exist').should('have.text', 'Secure File Download');
    cy.get('[href="/shadowdom"]').should('exist').should('have.text', 'Shadow DOM');
    cy.get('[href="/shifting_content"]').should('exist').should('have.text', 'Shifting Content');
    cy.get('[href="/slow"]').should('exist').should('have.text', 'Slow Resources');
    cy.get('[href="/tables"]').should('exist').should('have.text', 'Sortable Data Tables');
    cy.get('[href="/status_codes"]').should('exist').should('have.text', 'Status Codes');
    cy.get('[href="/typos"]').should('exist').should('have.text', 'Typos');
    cy.get('[href="/tinymce"]').should('exist').should('have.text', 'WYSIWYG Editor');
});

