/// <reference types="cypress" />
import { Actions, Assertions } from '../utils';
import { shared } from '../../../fixtures/constants/shared';
import 'cypress-iframe';

const actions = new Actions();
const assertions = new Assertions();
var intelligencePageName = "Mercury E2E Test";

export class Podcast {
  selectCardType = 'Podcast';
  addContentBlockButton = 'svg[data-icon="plus"]';
  clickInPodcastCard = 'div[data-testid="content-block-button-podcast-capability"]';
  mouseHoverpodcastCard = 'div[data-testid="Parent__Container"]';
  podcastTitlePlaceholder = 'input[placeholder="Podcast title"]';
  podcastTitleHelpText = 'input[placeholder="Podcast title"]';
  podcastFooterPlaceHolder = 'input[placeholder="Footnote"]';
  podcastFooterHelpText = 'input[placeholder="Footnote"]';
  podcast = 'div[class="jss_container jtabs jtabs-animation"]';
  locateDeleteButton = 'table>tbody>tr>td:nth-of-type(6)';
  confirmDeleteButton = 'button[data-testid="modal-footer-delete-btn"]';
  publishButton = 'button[data-testid="Publish"]';
  publishButtonPopup = 'button[data-testid="modal-footer-publish-btn"]';
  publishSuccessMessage = 'div[data-testid="workflow-success-modal"]>div>div:nth-of-type(2)>div';
  invalidError = 'div[data-testid="Invalid__URL__Error__Message"]';
  subscriberPodcastTitle = 'div[data-testid="podcast__view__container"]>h3';
  subscriberPodcastFooter = 'span[data-testid="footnote__text"]';
  moveToSubscriberView = 'button:contains("Load Subscriber View")';
  moveToAuthoringView = 'button:contains("Load Authoring View")';
  ResetView = 'button:contains("Reset View")';
  intelligencePage = 'div[data-pilet-name="canvas-pilet"]>div>ul>li';
  addPodcast = 'button[data-testid="Add__Podcast"]';
  enterPodcastTestUrl = 'textarea[data-testid="url__input__box"]';
  minimalPodcast = 'div[class="podo-player-wrapper small"]';
  podcastNormal = 'div[data-testid="player-type-normal"]';
  podcastMinimal = 'div[data-testid="player-type-minimal"]';
  normalPodcast = 'div[class="podo-player-wrapper"]';
  popupNextButton = 'button:contains("Next")';
  podcastTextarea = 'textarea[id="w3review"]';
  savedPodcastFrame = 'iframe[allow="encrypted-media"]';
  podcastSubscriber = 'div[data-testid="podcast-page-frame"]>iframe';
  envToggle = 'label[data-testid^="toggle"]';
  sendForReviewButton = 'button[data-testid="Send for review"]';
  reviewPopupBtn = 'button[data-testid="modal-footer-workflow-action-btn"]';
  publishworkflowButtonPopup = 'button[data-testid="modal-footer-workflow-action-btn"]';
  findDeleteBtn= 'tr:contains("Mercury E2E Test")>td:nth-child(7) button[data-testid^="delete-page"]';
  deletePage='button[data-testid="modal-footer-delete-btn"]';
  unpublishPage='button[data-testid="modal-footer-primary-btn"]';
  findUnpublishBtn= 'tr:contains("Mercury E2E Test")>td:nth-child(7) button[data-testid^="unpublish-page"]';
  findEditBtn= 'button[data-testid="undefined-edit-button"]';
  

  public openIntelligencePage() {
    cy.get(this.intelligencePage, { timeout: 10000 }).contains(intelligencePageName)
      .click().wait(6000);
    cy.url().should('include', 'subscriber');
  }

  public clickAtContentBlockButton() {
    actions.clickFirst(this.addContentBlockButton, { timeout: 5000 });
  }

  public selectPodcastCard() {
    cy.get(this.clickInPodcastCard).contains(this.selectCardType).click();
    cy.wait(1000);
  }

  public validateTitleInSubscriberView() {
    cy.get(this.subscriberPodcastTitle, { timeout: 20000 }).should('have.text', shared.podcastHeader);
  }

  public validateFootnotesInSubscriberView() {
    cy.get(this.subscriberPodcastFooter, { timeout: 20000 }).should('have.text', shared.podcastFooter);
  }

  public switchToSubsciberView() {
    cy.get(this.moveToSubscriberView, { timeout: 12000 }).click();
  }

  public switchToAuthoringViewandReset() {
    cy.wait(1000);
    cy.get(this.moveToAuthoringView).click();
    cy.get(this.ResetView).click();
    cy.wait(1000);
  }

  public deleteIntelligencePage() {
    cy.get(this.locateDeleteButton).first().click();
    cy.get(this.confirmDeleteButton).click();
  }

  public publishAuthoringPage() {
    cy.get(this.publishButton).click();
    cy.get(this.publishworkflowButtonPopup).click()
    cy.get(this.publishSuccessMessage, { timeout: 10000 }).should('have.text', shared.publishSuccessMessage);
  }

  public validatePodcastTitlePlacehoder() {
    return cy.get(this.podcastTitlePlaceholder).should('have.attr', 'data-testid', "Title__Text");
  }

  public validatePodcastTitleHelpText() {
    return cy.get(this.podcastTitleHelpText).should('contain', "0/65");
  }

  public addTitleToPodcast() {
    cy.get(this.podcastTitlePlaceholder).scrollIntoView().click().wait(500).type(shared.podcastHeader).wait(1000);
    cy.get(this.mouseHoverpodcastCard).click();
  }

  public addFooterToPodcast() {
    cy.get(this.podcastFooterPlaceHolder).scrollIntoView().click().wait(500).type(shared.podcastFooter).wait(2000);
    cy.get(this.mouseHoverpodcastCard).click().wait(1000);
  }

  public validatePodcastFooterPlaceholder() {
    return cy.get(this.podcastFooterPlaceHolder, { timeout: 5000 }).should('have.attr', 'placeholder', "Footnote");
  }

  public validatePodcastFooterHelpText() {
    return cy.get(this.podcastFooterHelpText, { timeout: 5000 }).should('contain', "0/120");
  }

  public validateTitleSaved() {
    return cy.get(this.podcastTitlePlaceholder, { timeout: 5000 }).should('have.attr', 'value', shared.podcastHeader);
  }

  public validateFootnotesSaved() {
    return cy.get(this.podcastFooterPlaceHolder).should('have.attr', 'value', shared.podcastFooter);
  }

  public clickOnAddPodcast() {
    cy.get(this.addPodcast, { timeout: 5000 }).should('contain', "Add podcast");
    cy.get('div', { timeout: 5000 }).contains('Add podcast').click();
  }

  public enterPodcastUrl() {
    cy.get(this.enterPodcastTestUrl).type(shared.podcastUrl).wait(5000);
  }

  public enterInvalidPodcastURL(url: string) {
    cy.get(this.enterPodcastTestUrl).type(url).wait(4000)
      .then(() => {
        cy.get(this.invalidError).should('have.text', shared.errorMessageforWrongPodcastURL_1);
      })
    cy.wait(1000);
    cy.get('button').contains('Cancel').should('be.visible').click();
  }

  public clickOnPopupCancelButton() {
    cy.get('button').contains('Cancel').should('be.visible').click();
  }

  public clickOnPopupAddToPageButton() {
    cy.get('button').contains('Add to page').should('be.visible').click();
  }

  public clickOnPopupNextButton() {
    cy.get(this.popupNextButton, { timeout: 8000 }).click();
  }

  public validateMinimalPreviewPodcastScreen() {
    cy.frameLoaded(this.savedPodcastFrame);
    return cy.iframe().find(this.minimalPodcast).should('be.visible');
  }

  public validateNormalPreviewPodcastScreen() {
    cy.frameLoaded(this.savedPodcastFrame);
    cy.iframe().find(this.normalPodcast).should('be.visible');
  }

  public validateBackButton() {
    cy.get('button').contains('Back').should('be.visible').click();
    cy.get(this.enterPodcastTestUrl).should('be.visible');
    cy.get('button').contains('Next').should('be.visible').click();
  }

  public validateSavedMinimalPodcast() {
    cy.frameLoaded(this.savedPodcastFrame);
    cy.iframe().find(this.minimalPodcast).should('be.visible');
  }

  public selectMinimalPodcast() {
    cy.get(this.podcastMinimal, { timeout: 5000 }).should('be.visible').click();
    cy.get('button').contains('Next').should('be.visible').click();
  }

  public validateSavedNormalPodcast() {
    cy.frameLoaded(this.savedPodcastFrame);
    cy.iframe().find(this.normalPodcast, { timeout: 5000 }).should('be.visible');
  }

  public selectNormalPodcast() {
    cy.get(this.podcastNormal).should('be.visible').click();
    cy.get('button').contains('Next').should('be.visible').click();
  }

  public findMinimalPodcastInSubscriber() {
    cy.wait(3000);
    cy.get(this.podcastSubscriber, { timeout: 20000 }).should('be.visible')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find(this.minimalPodcast).should('be.visible');
      })
  }

  public findNormalPodcastInSubscriber() {
    cy.get(this.podcastSubscriber, { timeout: 5000 }).should('be.visible')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find(this.normalPodcast).should('be.visible');
      })
  }

  public validateNormalPreviewPodcast() {
    cy.get(this.podcastSubscriber).should('be.visible');
  }

  public validateNewSavedNormalPodcast() {
    cy.get(this.podcastSubscriber, { timeout: 5000 }).should('be.visible')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find(this.normalPodcast).should('be.visible');
      })
  }

  public deleteContentBlock(){
    cy.get('div[data-testid="Parent__Container"]').trigger('mouseover').wait(1000).get('svg[data-icon="trash-can"]').click().wait(1000);
    cy.get('button[data-testid="modal-footer-delete-btn"]').click();

  }

  public sendForReviewPage(){
    cy.get(this.sendForReviewButton).click();
    cy.get(this.reviewPopupBtn).click();
  }

  public verifyeditbuttonvisibility() {
    return cy.get('button[data-testid="undefined-edit-button"]').should('not.be.visible');
}

public clickDeleteButton() {
  // cy.get('a').contains().click();
   cy.get(this.findDeleteBtn).click();
   cy.get(this.deletePage).click();
 }

 public clickunpublishButton() {
   cy.get(this.findUnpublishBtn).click();
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
}
