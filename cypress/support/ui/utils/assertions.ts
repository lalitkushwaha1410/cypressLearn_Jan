/* eslint-disable no-restricted-syntax*/

export class Assertions {
  public isVisible(locator: string) {
    return cy.get(locator);
  }

  public isNotVisible(locator: string) {
    return cy.get(locator).should('not.be.visible');
  }

  public doesNotExistByText(text: string) {
    return cy.contains(text).should('not.exist');
  }

  public doesNotExist(locator: string) {
    return cy.get(locator).should('not.exist');
  }

  public exists(locator: string) {
    return cy.get(locator).should('exist');
  }

  public existsInsideElement(parentLocator: string, childLocator: string) {
    return cy.get(parentLocator).find(childLocator).should('exist');
  }

  public hasLength(locator: string, length: number) {
    return cy.get(locator).should('have.length', length);
  }

  public containsText(locator: string, text: string) {
    return cy.get(locator).should('contain.text', text);
  }

  public doesNotContainText(locator: string, text: string) {
    return cy.get(locator).should('not.contain', text);
  }

  public hasValue(locator: string, value: string) {
    return cy.get(locator).should('have.value', value);
  }

  public scrollIntoViewAndhasValue(locator: string, value: string) {
    return cy.get(locator).scrollIntoView().should('have.text', value);
  }

  public doesNotHaveValue(locator: string, value: string) {
    return cy.get(locator).should('not.contain.value', value);
  }

  public isDisabled(locator: string) {
    return cy.get(locator).should('be.disabled');
  }

  public isEnabled(locator: string) {
    return cy.get(locator).should('be.enabled');
  }

  public isEmpty(locator: string) {
    return cy.get(locator).should('be.empty');
  }

  public hasCss(locator: string, property: string, value: string) {
    return cy.get(locator).should('have.css', property).and('eq', value);
  }

  public hasAttribute(locator: string, attribute: string, value: string) {
    return cy.get(locator).should('have.attr', attribute, value);
  }
}
