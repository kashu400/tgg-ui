import { AgencySelectors } from "../elements/agency_elements";

const agencyNotFoundText = "No Activated accounts";
const agencyText = "Automation";

export class AgencyPage {
    clickAddAgencyAccountBtn() {
        cy.wait(2000)
        cy.get(AgencySelectors.addAgencyAccountBtn).click()
    }
    addAgency(addAgencyPageTitle, accountname, accountaddress, accountcity, postalcode, phonenumber, slug) {
        cy.title().should('eq', addAgencyPageTitle)
        cy.get(AgencySelectors.accountName).type(accountname)
        cy.xpath(AgencySelectors.accountAddress).type(accountaddress)
        cy.xpath(AgencySelectors.accountCity).type(accountcity)
        cy.xpath(AgencySelectors.stateDropDown).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(AgencySelectors.selectState).click({ force: true })
        cy.xpath(AgencySelectors.accountPostalCode).type(postalcode)
        cy.get(AgencySelectors.accountPhoneNumber).type(phonenumber)
        cy.get(AgencySelectors.timeZoneDropDown).should('be.visible').click()
        cy.get(AgencySelectors.selectTimeZone).should('be.visible').click()
        cy.xpath(AgencySelectors.accountUrlSlug).type(slug)
        cy.get(AgencySelectors.accountLogoField).selectFile('cypress\\fixtures\\tgg.png')
        cy.get(AgencySelectors.imageUploadModal).should('be.visible')
        cy.xpath(AgencySelectors.imageUploadSaveBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.createAccountBtn).should('be.enabled').click()
        cy.xpath(AgencySelectors.agencySuccessMessage).should('be.visible').and('contain.text', "Agency Created Successfully!")
    }
    searchAgency(accountname) {
        cy.get(AgencySelectors.searchField).click().should('be.visible').type(accountname)
        cy.wait(2000)
        cy.get('.heading-16').should('be.visible').then(($el) => {
            cy.wrap($el).invoke("text")
                .then((text) => {
                    if (text == agencyText) {
                        cy.get('[class*="heading-16"]').each(($element) => {
                            cy.wrap($element).should('be.visible').and('contain.text', "Automation");
                        })
                    } else if (text == agencyNotFoundText) {
                        cy.get('.heading-16').contains('No Activated accounts').should('be.visible')
                        cy.log(agencyNotFoundText)
                    }
                })
        })
    }
    addClientInAgency(addClientPageTitle, clientname, organizationPageHeading, accountaddress, accountcity, postalcode, orgwebsite, phonenumber, orgtagline, businessoverview, financialPageHeading, advisorPageHeading, instituationname, contactfirstname, contactlastname, contactemail) {
        cy.xpath(AgencySelectors.addClientBtn).first().should('be.visible').click()
        cy.title().should('eq', addClientPageTitle)
        //Add Client in Agency
        cy.get(AgencySelectors.clientName).type(clientname)
        cy.get(AgencySelectors.timeZoneDropDown).should('be.visible').click()
        cy.get(AgencySelectors.selectTimeZone).should('be.visible').click()
        cy.get(AgencySelectors.clientLogoField).selectFile('cypress\\fixtures\\tgg-client.png')
        cy.get(AgencySelectors.imageUploadModal).should('be.visible')
        cy.xpath(AgencySelectors.imageUploadSaveBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        //Add Organizational Profile
        cy.xpath(AgencySelectors.organizationProfilePageHeading).last().should('be.visible').and('contain.text', organizationPageHeading)
        cy.xpath(AgencySelectors.accountAddress).type(accountaddress)
        cy.xpath(AgencySelectors.accountCity).type(accountcity)
        cy.xpath(AgencySelectors.stateDropDown).should('be.visible').click()
        cy.get(AgencySelectors.selectOrgState).should('be.visible').click()
        cy.xpath(AgencySelectors.accountPostalCode).type(postalcode)
        cy.get(AgencySelectors.orgWebsite).type(orgwebsite)
        cy.get(AgencySelectors.accountPhoneNumber).type(phonenumber)
        cy.get(AgencySelectors.orgTagline).type(orgtagline)
        cy.get(AgencySelectors.orgBussinessOverview).type(businessoverview)
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        //Add Financial Profile
        cy.xpath(AgencySelectors.financialProfilePageHeading).last().should('be.visible').and('contain.text', financialPageHeading)
        cy.xpath(AgencySelectors.entityTypeDropDown).click()
        cy.get(AgencySelectors.selectEntitytype).should('be.visible').click()
        cy.xpath(AgencySelectors.taxBasisDropDown).click()
        cy.get(AgencySelectors.selectTaxBasis).should('be.visible').click()
        cy.xpath(AgencySelectors.stateOfIncorporationDropDown).click()
        cy.get(AgencySelectors.selectStateOfIncorporation).should('be.visible').click()
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
    }
    addHubAnalyticsUserWithOwnerAccessInAgency(firstname, lastname, email, phonenumber) {
        cy.xpath(AgencySelectors.hubAnalyticUser).should('be.visible').click()
        cy.xpath(AgencySelectors.addHubAnalyticUserBtn).first().should('be.visible').click()
        cy.get(AgencySelectors.hubAnalyticUserFirstName).type(firstname)
        cy.get(AgencySelectors.hubAnalyticUserLastName).type(lastname)
        cy.get(AgencySelectors.hubAnalyticEmail).type(email)
        cy.get(AgencySelectors.hubAnalyticPhoneNumber).type(phonenumber)
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.permissionRadioBtn).first().click()
        cy.xpath(AgencySelectors.selectAccess).eq(0).click()
        cy.xpath(AgencySelectors.reviewDetailsBtn).click()
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text', "User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    addHubAnalyticsUserWithFullAccessInAgency(firstname, lastname, email, phonenumber) {
        cy.xpath(AgencySelectors.hubAnalyticUser).should('be.visible').click()
        cy.xpath(AgencySelectors.addHubAnalyticUserBtn).first().should('be.visible').click()
        cy.get(AgencySelectors.hubAnalyticUserFirstName).type(firstname)
        cy.get(AgencySelectors.hubAnalyticUserLastName).type(lastname)
        cy.get(AgencySelectors.hubAnalyticEmail).type(email)
        cy.get(AgencySelectors.hubAnalyticPhoneNumber).type(phonenumber)
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.permissionRadioBtn).first().click()
        cy.xpath(AgencySelectors.selectAccess).eq(1).click()
        cy.xpath(AgencySelectors.reviewDetailsBtn).click()
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text', "User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    addHubAnalyticsUserWithStandardAccessInAgency(firstname, lastname, email, phonenumber) {
        cy.xpath(AgencySelectors.hubAnalyticUser).should('be.visible').click()
        cy.xpath(AgencySelectors.addHubAnalyticUserBtn).first().should('be.visible').click()
        cy.get(AgencySelectors.hubAnalyticUserFirstName).type(firstname)
        cy.get(AgencySelectors.hubAnalyticUserLastName).type(lastname)
        cy.get(AgencySelectors.hubAnalyticEmail).type(email)
        cy.get(AgencySelectors.hubAnalyticPhoneNumber).type(phonenumber)
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.permissionRadioBtn).first().click()
        cy.xpath(AgencySelectors.selectAccess).eq(2).click()
        cy.xpath(AgencySelectors.reviewDetailsBtn).click()
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text', "User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    addHubAnalyticsUserWithReadOnlyAccessInAgency(firstname, lastname, email, phonenumber) {
        cy.xpath(AgencySelectors.hubAnalyticUser).should('be.visible').click()
        cy.xpath(AgencySelectors.addHubAnalyticUserBtn).first().should('be.visible').click()
        cy.get(AgencySelectors.hubAnalyticUserFirstName).type(firstname)
        cy.get(AgencySelectors.hubAnalyticUserLastName).type(lastname)
        cy.get(AgencySelectors.hubAnalyticEmail).type(email)
        cy.get(AgencySelectors.hubAnalyticPhoneNumber).type(phonenumber)
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.permissionRadioBtn).first().click()
        cy.xpath(AgencySelectors.selectAccess).eq(3).click()
        cy.xpath(AgencySelectors.reviewDetailsBtn).click()
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text', "User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    publishingRequirmentSettings() {
        cy.xpath(AgencySelectors.publishingRequirments).should('be.visible').click()
        cy.xpath(AgencySelectors.publishingRequirmentPageHeading).should('be.visible').and('contain.text', "Publishing Requirements Settings")
        cy.xpath(AgencySelectors.publishingRequirmentEditBtn).should('be.visible').click()
        for (let i = 0; i <= 10; i++) {
            cy.xpath(AgencySelectors.publishingRequirmentsCheckBoxes).eq(i).click();
        }
        cy.xpath(AgencySelectors.saveBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.publishingRequirmentUpdatedSuccessMessage).should('be.visible').and('contain.text', "Publishing Requirements Updated!")
        cy.wait(2000)
        cy.xpath(AgencySelectors.publishingRequirmentEditBtn).should('be.visible').click()
        for (let i = 0; i <= 10; i++) {
            cy.xpath(AgencySelectors.publishingRequirmentsCheckBoxes).eq(i).click();
        }
        cy.xpath(AgencySelectors.saveBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.publishingRequirmentUpdatedSuccessMessage).should('be.visible').and('contain.text', "Publishing Requirements Updated!")
    }
    filterAgencyAsActive() {
        cy.xpath(AgencySelectors.agencyFilterDropDown).click()
        cy.get(AgencySelectors.selectActiveFilter).click()
        cy.get('[class*=" common-shadow-light "]').each(($element) => {
            cy.wrap($element).find('div').should('be.visible');
        })
    }

    filterAgencyAsDeActiveted() {
        cy.xpath(AgencySelectors.agencyFilterDropDown).click()
        cy.get(AgencySelectors.selectDeactivetedFilter).click()
        cy.get('[class*=" common-shadow-light "]').then(($element) => {
            cy.wrap($element).find('div').contains('Deactivated').should('be.visible');
        })
    }
    deactivateAnAgency() {
        cy.get('.heading-16')
            .its("length")
            .then((length) => {
                const agencyRandomIndex = Math.floor(Math.random() * length);
                cy.get('.heading-16')
                    .eq(agencyRandomIndex)
                    .invoke("text")
                    .then((text) => {
                        const agencyInstanceText = text;
                        cy.log(agencyInstanceText);
                        cy.wait(2000)
                        const deactivateAgencyIcon = `//span[text()='${agencyInstanceText}']/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
                        cy.xpath(deactivateAgencyIcon).last().click()
                        cy.xpath(AgencySelectors.deactivateModal).should('be.visible').and('contain.text', "Deactivate Account")
                        cy.xpath(AgencySelectors.yesBtn).click()
                        cy.xpath(AgencySelectors.deactivateAgencySuccessMessage).should('be.visible').and('contain.text', "Deactivated Successfully.")
                    })
            })
    }
    activateAnAgency() {
        cy.get('.heading-16')
            .its("length")
            .then((length) => {
                const agencyRandomIndex = Math.floor(Math.random() * length);
                cy.get('.heading-16')
                    .eq(agencyRandomIndex)
                    .invoke("text")
                    .then((text) => {
                        const agencyInstanceText = text;
                        cy.log(agencyInstanceText);
                        const activateAgencyIcon = `//span[text()='${agencyInstanceText}']/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
                        cy.xpath(activateAgencyIcon).last().should('be.visible').click({ Force: true })
                        cy.xpath(AgencySelectors.activateModal).should('be.visible').and('contain.text', "Activate Account")
                        cy.xpath(AgencySelectors.yesBtn).click()
                        cy.xpath(AgencySelectors.activateAgencySuccessMessage).should('be.visible').and('contain.text', "Activated Successfully.")
                    })
            })
    }
}

