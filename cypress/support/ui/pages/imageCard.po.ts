/// <reference types="cypress" />
import { Actions, Assertions } from '../utils';
import { shared } from '../../../fixtures/constants/shared';

const actions = new Actions();
const assertions = new Assertions();
var intelligencePageName = "Mercury E2E Test";

export class ImageCardPage {
  selectCardType = 'Image';
  addContentBlockButton = 'svg[data-icon="plus"]';
  exportButton = 'button[id="export"]';
  clickImageCard = 'div[data-testid="content-block-button-image-capability"]';
  mouseHoverImageCard = 'div[data-testid="Parent__Container"]';
  firstCardDeleteIcon = 'svg[data-icon="trash-can"]';
  firstCardEditCloseIcon = 'svg[data-icon="pen"]';
  addImageOnImageCard = 'div[data-testid^="image_capability"]>div:nth-of-type(1)>button';
  errorMessageForUnsupportedFile = 'div[class="warningMessage"]>div:nth-child(1)';
  errorMessageForJPG_PNGFile = 'div[class="warningMessage"]>div:nth-child(2)';
  warningMessage1 = 'div[class="warningMessage"]>div:nth-child(1)';
  warningMessage2 = 'div[class="warningMessage"]>div:nth-child(2)';
  validwarningMessage1 = 'div[data-testid="image-container"]+div>div:nth-of-type(2)>div:nth-of-type(1)';
  validwarningMessage2 = 'div[data-testid="image-container"]+div>div:nth-of-type(2)>div:nth-of-type(2)'
  fileType = 'input[type=file]';
  closeButtonPopup = 'button[data-testid="dismiss-modal"]>svg[data-icon="xmark"]';
  closeEditButton = 'svg[data-icon="view-show"]';
  cancelButton = 'button:contains("Cancel")';
  browseButton = 'button[data-testid="browse-btn"]';
  previewDeleteButton = 'div[class="imageContainer"]+div>svg[data-icon="trash-can"]';
  AddtoPageButton = 'div[class="validationMessageSection"]+button';
  ImageDisplayed = 'img';
  imageTitlePlaceholder = 'input[placeholder="Image title"]';
  imageTitleHelpText = 'div[data-testid="Title__Validation_Text"]';
  imageFooterPlaceHolder = 'input[placeholder="Footnote"]';
  imageFooterHelpText = 'div[data-testid="Footnote__Validation_Text"]';
  intelligencePage = 'div[data-pilet-name="canvas-pilet"]>div>ul>li';
  subscriberImage = 'div[data-testid="image__container__box"]>div>img';
  subscriberImageTitle = 'div[data-testid="image__view__container"]>h3';
  subscriberImageFooter = 'span[data-testid="footnote__text"]';
  moveToSubscriberView = 'button:contains("Load Subscriber View")';
  locateImageinSubscriber = 'div[data-testid="image__container__box"]>div';
  locateDeleteButton = 'table>tbody>tr>td:nth-of-type(6)';
  confirmDeleteButton = 'button[data-testid="modal-footer-delete-btn"]';
  sendForReviewButton = 'button[data-testid="Send for review"]';
  publishButton = 'button[data-testid="Publish"]';
  publishButtonPopup = 'button[data-testid="modal-footer-workflow-action-btn"]';
  publishSuccessMessage = 'div[data-testid="workflow-success-modal"]>div>div:nth-of-type(2)>div';
  envToggle = 'label[data-testid^="toggle"]';
  reviewPopupBtn = 'button[data-testid="modal-footer-workflow-action-btn"]';
  findDeleteBtn= 'tr:contains("Mercury E2E Test")>td:nth-child(7) button[data-testid^="delete-page"]';
  deletePage='button[data-testid="modal-footer-delete-btn"]';
  unpublishPage='button[data-testid="modal-footer-primary-btn"]';
  findUnpublishBtn= 'tr:contains("Mercury E2E Test")>td:nth-child(7) button[data-testid^="unpublish-page"]';
  findEditBtn= 'button[data-testid="undefined-edit-button"]';

  public toggleSwitchOn(){
    actions.getNthElement(this.envToggle,1).click();
  }

  public clickAtContentBlockButton() {
    actions.clickFirst(this.addContentBlockButton, { timeout: 5000 });
  }

  public selectImageCard() {
    cy.get(this.clickImageCard).contains(this.selectCardType).click();
    cy.wait(1000);
  }

  public verifyDeleteIconForFirstCard() {
    return assertions.exists(this.firstCardDeleteIcon);
  }

  public verifyEditIconForFirstCard() {
    return assertions.exists(this.firstCardEditCloseIcon);
  }

  public clickOnAddImage() {
    cy.get(this.addImageOnImageCard, { timeout: 5000 }).should('contain', "Add image");
    cy.get('div', { timeout: 5000 }).contains('Add image').click();
  }

  public clickOnAddImageInTestharness() {
    cy.get(this.addImageOnImageCard, { timeout: 5000 }).should('contain', "Add image");
    cy.get('div', { timeout: 5000 }).contains('Add image').click();
  }
  public selectAndUploadUnsupportedImage() {
    cy.get('div').contains('Browse your computer').click();
    cy.get('input[type=file]').selectFile('cypress/fixtures/test_images/image-gif.gif', { force: true })
  }

  public invalidFormatError() {
    cy.get(this.warningMessage1).should('contain.text', shared.errorMessageForUnsupportFile);
    cy.get(this.warningMessage2).should('contain.text', shared.errorMessageToUploadJPG_PNGFile);
  }

  public imageSizeError() {
    cy.get(this.warningMessage1).should('contain.text', shared.errorMessageexceedSize);
    cy.get(this.warningMessage2).should('contain.text', shared.errorMessageTouploadvalidsize);

  }

  public imagewarningMessage() {
    cy.get(this.validwarningMessage1).should('contain.text', shared.validImageWarningMessage1);
    cy.get(this.validwarningMessage2).should('contain.text', shared.validImageWarningMessage2);
  }

  public validateCancelAndBrowseButtons() {
    cy.get(this.cancelButton).should('be.visible');
    cy.get(this.browseButton).contains('Browse').should('be.visible');
  }

  public validateCancel_BrowseButtons_testharness() {
    cy.get(this.cancelButton).should('be.visible');
    cy.get(this.browseButton).contains('Browse').should('be.visible');

  }

  public closePopupDialog() {
    return cy.get(this.closeButtonPopup).should('be.visible').click();
  }

  public closeImageCard() {
    cy.get(this.mouseHoverImageCard).trigger('mouseover');
    cy.wait(1000);
    cy.get(this.closeEditButton).click();
  }

  public selectAndUploadLargeSizeImage() {
    cy.get('div').contains('Browse your computer').click();
    cy.get(this.fileType).selectFile(shared.imageLargesize, { force: true })
  }

  public selectAndUploadValidImage() {
    cy.get('div').contains('Browse your computer').click();
    cy.get(this.fileType).selectFile(shared.imageValid, { force: true })
  }

  public validatePreviewDeleteButton() {
    return cy.get(this.previewDeleteButton).should('be.visible');
  }

  public clickAddToPageButton() {
    cy.get(this.AddtoPageButton).click();
    cy.wait(4000);
  }

  public validateImageisAdded() {
    cy.get(this.ImageDisplayed).should('be.visible')
  }


  public validateImageTitlePlacehoder() {
    return cy.get(this.imageTitlePlaceholder).should('have.attr', 'aria-label', "title-input");
  }

  public validateImageTitleHelpText() {
    return cy.get(this.imageTitleHelpText).should('contain', "0/65");
  }

  public addingTitletoImage() {
    cy.get(this.imageTitlePlaceholder).scrollIntoView().click().wait(1000).type(shared.ImageHeader).wait(1000);
    cy.get(this.mouseHoverImageCard).click();
  }

  public addingFooterToImage() {
    cy.get(this.imageFooterPlaceHolder).scrollIntoView().click().wait(500).type(shared.ImageFooter).wait(2000);
    cy.get(this.mouseHoverImageCard).click();
  }

  public validateImageFooterPlaceholder() {
    return cy.get(this.imageFooterPlaceHolder, { timeout: 5000 }).should('have.attr', 'placeholder', "Footnote");
  }

  public validateImageFooterHelpText() {
    return cy.get(this.imageFooterHelpText, { timeout: 5000 }).should('contain', "0/120");
  }

  public validateTitleSaved() {
    return cy.get(this.imageTitlePlaceholder, { timeout: 5000 }).should('have.attr', 'value', shared.ImageHeader);
  }

  public validateFootnotesSaved() {
    return cy.get(this.imageFooterPlaceHolder, { timeout: 5000 }).should('have.attr', 'value', shared.ImageFooter);
  }

  public validateImageinSubscriberView() {
    cy.get(this.subscriberImage, { timeout: 3000 }).should('have.attr', 'data-testid', 'image__element');
  }

  public validateImagetitleInSubscriberView() {
    cy.get(this.subscriberImageTitle, { timeout: 5000 }).should('have.text', shared.ImageHeader);
  }

  public validateFootnotesInSubscriberView() {
    cy.get(this.subscriberImageFooter, { timeout: 5000 }).should('have.text', shared.ImageFooter);
  }

  public switchToSubsciberView() {
    cy.wait(1000);
    cy.get(this.moveToSubscriberView).click();
  }

  public openIntelligencePage() {
    cy.get(this.intelligencePage).contains(intelligencePageName)
      .click().wait(4000);
    cy.url().should('include', 'subscriber')
  }

  public findImageInSubscriber() {
    cy.get(this.locateImageinSubscriber).get('img').should('be.visible');
  }

  public deleteIntelligencePage() {
    cy.get(this.locateDeleteButton).first().click();
    cy.get(this.confirmDeleteButton).click();
  }

  public sendForReviewPage(){
    cy.get(this.sendForReviewButton).click();
    cy.get(this.reviewPopupBtn).click();
  }

  public publishAuthoringPage() {
    cy.get(this.publishButton).click();
    cy.get(this.publishButtonPopup).click();
    cy.get(this.publishSuccessMessage).should('have.text', shared.publishSuccessMessage, { timeout: 10000 });
  }

  public deleteContentBlock(){
    cy.get('div[data-testid="Parent__Container"]').trigger('mouseover').wait(1000).get('svg[data-icon="trash-can"]').click().wait(1000);
    cy.get('button[data-testid="modal-footer-delete-btn"]').click();

  }

  public clickDeleteButton() {
   // cy.get('a').contains().click();
    cy.get(this.findDeleteBtn).click();
    cy.wait(2000);
    cy.get(this.deletePage).click();
  }

  public clickunpublishButton() {
    cy.get(this.findUnpublishBtn).click();
    cy.wait(2000);
    cy.get(this.unpublishPage).click();
  }

  public DeleteRecord() {
  const title = 'Mercury E2E Test';
  // Find the row with the given title
  cy.get(`tr:contains("${title}")`).then(($row) => {
    //check if button is unpublish
    if ($row.find('td:nth-child(7) button[data-testid^="unpublish-page"]').length > 0 ) {
      // If it does, click 'Unpublish'
      this.clickunpublishButton();
      cy.wait(5000);
      this.clickDeleteButton();
      cy.wait(5000);
    }
else
    // Click the delete button
    this.clickDeleteButton();
  });
}

  public verifyeditbuttonvisibility() {
    return cy.get(this.findEditBtn).should('not.be.visible');
}
}
