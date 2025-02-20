/// <reference types="cypress" />
import { Actions, Assertions } from '../utils';

const actions = new Actions();

export class ImagePickerModal {
    ChooseFeaturedImageButton = 'Choose Featured Image';
    imagePickerModalTitle = 'div[data-testid="image-picker"]';
    imagesPresentOnScreen = 'div[data-testid^="thumbnail"]';
    imageToSelect = '[data-testid^="thumbnail"]';
    previewButton = '[data-testid="button-preview"]';
    backButton = '[data-testid="button-back"]'
    AddToHeaderButton = '[data-testid="button-submit"]';
    previewImage = '[data-testid="preview-component"]';
    

    public clickChooseFeaturedImageButton() {
        cy.get('div', { timeout: 5000 }).contains(this.ChooseFeaturedImageButton).click();
      }

    public validateImagePickerModalTitle() {
        return cy.get(this.imagePickerModalTitle).should('contain', "Add featured image");
    }

    public selectFeaturedImage() {
        cy.get(this.imagesPresentOnScreen).its('length');
    
        cy.get(this.imageToSelect).then(imageList => {
            if (imageList.length > 0) {
                const randomImage = Math.floor(Math.random() * imageList.length);
                cy.wrap(imageList[randomImage]).click();
            }
        });
    }

    public clickOnPreviewButton() {
        actions.click(this.previewButton, { timeout: 5000 })
    }

    public validatePrivewModalTitle() {
        return cy.get(this.imagePickerModalTitle).should('contain', "Preview");
    }

    public validateBackButtonisVisible() {
        return cy.get(this.backButton).should('be.visible');
    }

    public clickAddToHeaderButton() {
        actions.click(this.AddToHeaderButton, { timeout: 5000 })
    }

    public validatePreviewdImageIsDisplayed() {
        return cy.get(this.previewImage).should('be.visible');
    }
}
