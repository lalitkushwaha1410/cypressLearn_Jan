/// <reference types="cypress" />

import { baseURL } from '../fixtures/constants/environment';

export { };
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      appUrl(): Chainable<void>;
      Login(user: string, password: string): Chainable<void>;
      Subscriber_login(user: string, password: string): Chainable<void>;
      waitForVisible(selector: string, timeout: number);
      waitForEnabled(selector: string, timeout: number);
      paste(selector, pastePayload);
      SearchExistingORCreateNewIntelligencePage(); Chainable<T>();
      CheckDuplicateLogin(); Chainable<T>();
    }
  }
}

Cypress.Commands.add('appUrl', () => {
  cy.visit(baseURL);
});

Cypress.Commands.add('Login', (username, password) => {
  cy.get('span[class="badge bg-primary"]').click();
  cy.get('#userNameInput').type(username);
  cy.get('#passwordInput').type(password);
  cy.get('#submitButton').click();
});

Cypress.Commands.add('Subscriber_login', (username, password) => {
  cy.get('input[id="username-input"]').type(username);
  cy.get('input[id="password-input"]').type(password);
  cy.get('button[id="login-button"]').click();
  cy.wait(15000);
});

Cypress.Commands.add('waitForVisible', (selector, timeout) => {
  cy.get(selector, { timeout }).should('be.visible');
});

Cypress.Commands.add('waitForEnabled', (selector, timeout) => {
  cy.get(selector, { timeout }).should('be.enabled');
});

Cypress.Commands.add('SearchExistingORCreateNewIntelligencePage', () => {
  
  let intelligencePageName = "Mercury E2E Test";
  cy.get('body').wait(1000).then(($body) => {
    if ($body.find('a:contains("Mercury E2E Test")').length > 0 ) { 
      cy.get('a').contains('Mercury E2E Test').click();
    }
    else {
    cy.get('button[data-testid="create-new-page-button"]',{ timeout: 8000 }).click();
    cy.get('textarea[data-testid="headline-textarea"]').type(intelligencePageName);
    cy.get('textarea[data-testid="description-textarea"]').type(intelligencePageName)
    cy.get('button[data-testid="next-button"]').click();
    cy.get('div[data-testid="template-image-wrapper-One Column"]').click();
    cy.get('button[data-testid="create-page-button"]').click();
    cy.wait(10000);
    }
  })
});

Cypress.Commands.add('CheckDuplicateLogin', () => {
  cy.get('body').wait(1000).then(($body) => {
    if ($body.find('div:contains("Continue")').length > 0 ) { 
      cy.get('div').contains('Continue').click();
      cy.wait(8000);
    }
  });
});

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on('uncaught:exception', (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});