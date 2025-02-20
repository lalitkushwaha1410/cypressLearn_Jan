/* eslint-disable no-restricted-syntax*/

export class Actions {
  public click(locator: string, options = {}) {
    return cy.get(locator).click(options);
  }

  public clickFirst(locator: string, options = {}) {
    return cy.get(locator).first().click(options);
  }

  public clickNth(locator: string, index: number, options = {}) {
    return cy.get(locator).eq(index).click(options);
  }

  public clickByText(locator: string, text: string, options = {}) {
    return cy.get(locator).contains(text).click(options);
  }

  public clickJquery(locator: JQuery<HTMLElement>, options = {}) {
    return cy.wrap(locator).click(options);
  }

  public rightClick(locator: string, options = {}, index = 0) {
    return cy.get(locator).eq(index).rightclick(options);
  }

  public type(locator: string, text: string, options = {}) {
    return cy.get(locator).type(text, options);
  }

  public clearAndType(locator: string, text: string, options = {}) {
    return cy.get(locator).clear(options).type(text, options);
  }

  public clearAndTypeNthElement(locator: string, text: string, index: number, options = {}) {
    return cy.get(locator).eq(index).clear(options).type(text, options);
  }

  public clearAndTypeFirstElement(locator: string, text: string, options = {}) {
    return cy.get(locator).first().clear(options).type(text, options);
  }

  public getElement(locator: string) {
    return cy.get(locator);
  }

  public getNthElement(locator: string, index: number) {
    return cy.get(locator).eq(index);
  }

  public interceptRequest(options: any, alias: string) {
    return cy.intercept(options).as(alias);
  }

  public waitForRequest(alias: string) {
    return cy.wait(`@${alias}`);
  }

  public visit(url: string) {
    return cy.visit(url);
  }

  public dragAndDrop(locator: string, index = 0, x: number, y: number) {
    return cy.get(locator).eq(index).trigger('mousedown', { button: 0 }).trigger('mousemove', x, y, { force: true }).trigger('mouseup');
  }

  public drag(locator: string, index = 0, x: number, y: number) {
    return cy.get(locator).eq(index).trigger('mousedown', { button: 0 }).trigger('mousemove', x, y, { force: true });
  }

  public getText(locator: string, index = 0) {
    return cy
      .get(locator)
      .eq(index)
      .invoke('text')
      .then((elementText) => {
        return elementText;
      });
  }

  public getValue(locator: string) {
    return cy
      .get(locator)
      .invoke('val')
      .then((elementValue) => {
        return elementValue;
      });
  }

  public getAttribute(locator: string, functionName: string, attribute: string) {
    return cy
      .get(locator)
      .invoke(functionName, attribute)
      .then((attribute) => {
        return attribute;
      });
  }

  public log(message: string) {
    return cy.log(message);
  }

  public wait(ms: number) {
    return cy.wait(ms);
  }

  public wrapText(text: string) {
    return cy.wrap(text);
  }

  public reload() {
    return cy.reload();
  }

  public select(locator: string, option: string) {
    return cy.get(locator).select(option);
  }

  public setViewport(width: number, height: number) {
    return cy.viewport(width, height);
  }
}
