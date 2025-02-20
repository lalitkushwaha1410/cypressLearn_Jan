/// <reference types="cypress" />
import { Actions, Assertions } from '../utils';
import { shared } from '../../../fixtures/constants/shared';
import 'cypress-iframe';

const actions = new Actions();
const assertions = new Assertions();
var intelligencePageName = "Mercury E2E Test";

export class VideoPage {
  selectCardType = 'Video';
  addContentBlockButton = 'svg[data-icon="plus"]';
  exportButton = 'button[id="export"]';
  clickVideoCard = 'div[data-testid="content-block-button-video-capability"]';
  mouseHoverVideoCard = 'div[data-testid="Parent__Container"]';
  firstCardDeleteIcon = 'svg[data-icon="trash-can"]';
  firstCardEditCloseIcon = 'svg[data-icon="pen"]';
  clickAddVideo = 'button[data-testid="Add__Video"]';
  videoInputField = 'input[data-testid="url__input__box"][id="inputUrl"]';
  invalidErrorMessage = 'div[data-testid="Invalid__URL__Error__Message"]';
  closeButtonPopup = 'svg[data-icon="xmark"]';
  closeEditButton = 'svg[data-icon="view-show"]';
  previewDeleteButton = 'div[data-testid="bin__icon__btn"]>svg[data-icon="trash-can"]';
  AddtoPageButton = 'div[class="validationMessageSection"]+button';
  videoTitlePlaceholder = 'input[placeholder="Video title"]';
  videoTitleHelpText = 'div[data-testid="Title__Validation_Text"]';
  videoFooterPlaceHolder = 'input[placeholder="Footnote"]';
  videoFooterHelpText = 'div[data-testid="Footnote__Validation_Text"]';
  pageHeadLine = 'textarea[data-testid="headline-textarea"]';
  NextButton = 'button:contains("Next")';
  AddToPageButton = 'button:contains("Add to page")';
  playVideoScreen = 'video[data-testid="hls-video"]';
  videoQualityChangeIcon = 'path[data-testid="cog"]';
  videoFullScreenChangeIcon = 'path[data-testid="expand"]';
  videoVolumeChangeIcon = 'path[data-testid="volumeHigh"]';
  playIcon = 'path[data-testid="play"]';
  editVideoIcon = 'button[data-testid="Icon__Btn"]';
  savedVideoFrame = 'iframe[class^="vidyard-iframe"][allow="autoplay; fullscreen; picture-in-picture; camera; microphone; display-capture"]';
  videoScreen = 'div[data-testid="splashPlayButton"]';
  moveToSubscriberView = 'div[data-pilet-name="video-pilet-authoring"]>div>div>div>button:nth-of-type(2)';
  intelligencePage = 'div[data-pilet-name="canvas-pilet"]>div>ul>li';
  subscriberVideoTitle = 'h3[data-testid="tile__text"]';
  subscriberVideoFooter = 'span[data-testid="footnote__text"]';
  videoContainer = 'div[data-testid="video__view__container"]';
  publishButton = 'button[data-testid="Publish"]';
  publishButtonPopup = 'button[data-testid="modal-footer-publish-btn"]';
  publishSuccessMessage = 'div[data-testid="workflow-success-modal"]>div:nth-of-type(3)>div:nth-of-type(2)';
  locateDeleteButton = 'table>tbody>tr>td:nth-of-type(6)';
  confirmDeleteButton = 'button[data-testid="modal-footer-delete-btn"]';
  sendForReviewButton = 'button[data-testid="Send for review"]';
  reviewPopupBtn = 'button[data-testid="modal-footer-workflow-action-btn"]';
  publishworkflowButtonPopup = 'button[data-testid="modal-footer-workflow-action-btn"]';
  pageListTable = 'div[data-testid="page-list-table"]>table>tbody';
  findDeleteBtn= 'tr:contains("Mercury E2E Test")>td:nth-child(7) button[data-testid^="delete-page"]';
  deletePage='button[data-testid="modal-footer-delete-btn"]';
  unpublishPage='button[data-testid="modal-footer-primary-btn"]';
  findUnpublishBtn= 'tr:contains("Mercury E2E Test")>td:nth-child(7) button[data-testid^="unpublish-page"]';
  findEditBtn= 'button[data-testid="undefined-edit-button"]';

  public openIntelligencePage() {
    cy.get(this.intelligencePage, { timeout: 5000 }).contains(intelligencePageName)
      .click().wait(5000);
    cy.url().should('include', 'subscriber')
  }

  public clickAtContentBlockButton() {
    actions.clickFirst(this.addContentBlockButton, { timeout: 10000 });
  }


  public selectVideoCard() {
    cy.get(this.clickVideoCard).contains(this.selectCardType).click();
  }

  public verifyDeleteIconForFirstCard() {
    return assertions.exists(this.firstCardDeleteIcon);
  }

  public verifyEditIconForFirstCard() {
    return assertions.exists(this.firstCardEditCloseIcon);
  }


  public clickOnAddVideo() {
    cy.wait(1000);
    cy.get(this.clickAddVideo).should('contain', "Add video");
    cy.get(this.clickAddVideo).click();
    cy.wait(1000);
  }

  public closePopupDialog() {
    return cy.get(this.closeButtonPopup).should('be.visible').click();
  }

  public validatePreviewDeleteButton() {
    return cy.get(this.previewDeleteButton).should('be.visible');
  }

  public clickAddToPageButton() {
    return cy.get(this.AddtoPageButton).click();
  }

  public validateVideoTitlePlacehoder() {
    return cy.get(this.videoTitlePlaceholder, { timeout: 5000 }).should('have.attr', 'aria-label', "title-input");
  }

  public validateVideoTitleHelpText() {
    cy.get(this.videoTitlePlaceholder).scrollIntoView().click();
    return cy.get(this.videoTitleHelpText, { timeout: 5000 }).should('contain', "0/65");
  }

  public addHeaderToVideo() {
    cy.wait(1000);
    cy.get(this.videoTitlePlaceholder).scrollIntoView().click().type(shared.VideoHeader);
    cy.get(this.mouseHoverVideoCard).click();
  }

  public addFooterToVideo() {
    cy.wait(1000);
    cy.get(this.videoFooterPlaceHolder).scrollIntoView().click().wait(500).type(shared.VideoFooter).wait(2000);
    cy.get(this.mouseHoverVideoCard).click().wait(1000);
  }
  public validateVideoFooterPlaceholder() {
    return cy.get(this.videoFooterPlaceHolder, { timeout: 5000 }).should('have.attr', 'placeholder', "Footnote");
  }

  public validateVideoFooterHelpText() {
    return cy.get(this.videoFooterHelpText, { timeout: 5000 }).should('contain', "0/120");
  }

  public enterVideoURL() {
    cy.get(this.videoInputField, { timeout: 14000 }).should('be.visible').clear().type(shared.videoURL).wait(5000);
    //cy.get('[data-testid="video-preview"]', { timeout: 10000 }).should('be.visible').click();
  }

  public enterInvalidVideoURL() {
    cy.get(this.videoInputField).type(shared.WrongVideoURL_1).wait(1000)
      .then(() => {
        cy.get(this.invalidErrorMessage).should('have.text', shared.errorMessageforWrongURLForVideo_1);
      })
  }

  public entertypoErrroVideoURL() {
    cy.get(this.videoInputField).focus().type(shared.WrongVideoURL_2).wait(1000)
      .then(() => {
        cy.get(this.invalidErrorMessage).wait(5000).should('have.text', shared.errorMessageForTypo);
      })
  }

  public clickOnPopupNextButton() {
    cy.waitForEnabled(this.NextButton, 12000);
    cy.get(this.NextButton).click();
  }

  public clickOnPopupAddToPageButton() {
    cy.waitForEnabled(this.AddToPageButton, 12000);
    cy.get(this.AddToPageButton).click();
  }

  public clickOnVideo() {
    cy.get(this.mouseHoverVideoCard).click();
  }

  public playSavedVideo() {
    //cy.frameLoaded(this.savedVideoFrame)
    cy.iframe().find(this.videoScreen).should('be.visible').click({ force: true });
  }

  public validatePlayVideoScreenDisplay() {
    return cy.iframe().find(this.playVideoScreen).should('be.visible');
  }

  public mouseHoverVideoAndPauseVideo() {
    cy.iframe().find(this.playVideoScreen).should('be.visible');
    cy.iframe().find(this.playVideoScreen).trigger('mouseover').click();
    cy.wait(1000);
    return cy.iframe().find(this.playIcon).should('be.visible');
  }

  public validateVideoQualityChangeIcon() {
    return cy.iframe().find(this.videoQualityChangeIcon).should('be.visible');
  }

  public validateVideoVolumeChangeIcon() {
    return cy.iframe().find(this.videoVolumeChangeIcon).should('be.visible');
  }

  public validateVideoFullScreenIcon() {
    return cy.iframe().find(this.videoFullScreenChangeIcon).should('be.visible');
  }

  public validateTitleSaved() {
    return cy.get(this.videoTitlePlaceholder, { timeout: 5000 }).should('have.attr', 'value', shared.VideoHeader);
  }

  public validateFootnotesSaved() {
    return cy.get(this.videoFooterPlaceHolder, { timeout: 5000 }).should('have.attr', 'value', shared.VideoFooter);
  }
/*
  public publishAuthoringPage() {
    cy.get(this.publishButton).click();
    cy.get(this.publishButtonPopup).click().wait(3000);
    cy.get(this.publishSuccessMessage).should('have.text', shared.publishSuccessMessage);
  }
*/
  public switchToSubsciberView() {
    cy.wait(1000);
    cy.get(this.moveToSubscriberView).should('be.enabled').focus().click();
  }

  public validatetitleInSubscriberView() {
    cy.wait(2000)
    cy.get(this.subscriberVideoTitle, { timeout: 20000 }).should('have.text', shared.VideoHeader);
  }

  public validateFootnotesInSubscriberView() {
    cy.get(this.subscriberVideoFooter, { timeout: 20000 }).should('have.text', shared.VideoFooter);
  }

  public deleteIntelligencePage() {
    cy.get(this.locateDeleteButton).first().click();
    cy.get(this.confirmDeleteButton).click();
  }

  public findVideoInSubscriber() {
    cy.get(this.videoContainer, { timeout: 20000 }).should('be.visible');
  }

  public deleteContentBlock(){
    cy.wait(3000);
    cy.get('div[data-testid="Parent__Container"]').trigger('mouseover').wait(1000).get('svg[data-icon="trash-can"]').click().wait(1000);
    cy.get('button[data-testid="modal-footer-delete-btn"]').click();
  }

  public sendForReviewPage(){
    cy.get(this.sendForReviewButton).click();
    cy.get(this.reviewPopupBtn).click();
  }

  public publishAuthoringPage() {
    cy.get(this.publishButton).click();
    cy.get(this.publishworkflowButtonPopup).click().wait(3000);
    cy.get(this.publishSuccessMessage, { timeout: 10000 }).should('have.text', shared.publishSuccessMessage);
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
