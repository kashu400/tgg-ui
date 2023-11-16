import { AgencySelectors } from "../elements/agency_elements";
export class AgencyPage{
    clickAddAgencyAccountBtn(){
        cy.wait(3000)
        cy.get(AgencySelectors.addAgencyAccountBtn).click()
    }
    // verifyAddAgencyPageIsDisplayed(addAgencyPageTitle){
    //     cy.title().should('eq',addAgencyPageTitle)
    // }
    addAgency(addAgencyPageTitle,accountname,accountaddress,accountcity,postalcode,phonenumber,slug){
        cy.title().should('eq',addAgencyPageTitle)
        cy.get(AgencySelectors.accountName).type(accountname)
        cy.xpath(AgencySelectors.accountAddress).type(accountaddress)
        cy.xpath(AgencySelectors.accountCity).type(accountcity)
        cy.xpath(AgencySelectors.stateDropDown).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(AgencySelectors.selectState).click({force:true})
        cy.xpath(AgencySelectors.accountPostalCode).type(postalcode)
        cy.get(AgencySelectors.accountPhoneNumber).type(phonenumber)
        cy.get(AgencySelectors.timeZoneDropDown).should('be.visible').click()
        cy.get(AgencySelectors.selectTimeZone).should('be.visible').click()
        cy.xpath(AgencySelectors.accountUrlSlug).type(slug)
        cy.get(AgencySelectors.accountLogoField).selectFile('cypress\\fixtures\\tgg.png')
        cy.get(AgencySelectors.imageUploadModal).should('be.visible')
        cy.xpath(AgencySelectors.imageUploadSaveBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.createAccountBtn).should('be.enabled').click()
        // cy.xpath(AgencySelectors.agencySuccessMessage).should('be.visible').and('contain.text',"Agency Created Successfully!")
    }
    searchAgency(accountname){
        cy.wait(2000)
        cy.get(AgencySelectors.searchField).click().should('be.visible').type(accountname)
    }
     addClientInAgency(addClientPageTitle,clientname,organizationPageHeading,accountaddress,accountcity,postalcode,orgwebsite,phonenumber,orgtagline,businessoverview,financialPageHeading,advisorPageHeading,instituationname,contactfirstname,contactlastname,contactemail){
        cy.xpath(AgencySelectors.addClientBtn).first().should('be.visible').click()
        cy.title().should('eq',addClientPageTitle)
        //Add Client in Agency
        cy.get(AgencySelectors.clientName).type(clientname)
        cy.get(AgencySelectors.timeZoneDropDown).should('be.visible').click()
        cy.get(AgencySelectors.selectTimeZone).should('be.visible').click()
        cy.get(AgencySelectors.clientLogoField).selectFile('cypress\\fixtures\\tgg-client.png')
        cy.get(AgencySelectors.imageUploadModal).should('be.visible')
        cy.xpath(AgencySelectors.imageUploadSaveBtn).should('be.visible').click()
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
        //Add Organizational Profile
        cy.xpath(AgencySelectors.organizationProfilePageHeading).last().should('be.visible').and('contain.text',organizationPageHeading)
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
        cy.xpath(AgencySelectors.financialProfilePageHeading).last().should('be.visible').and('contain.text',financialPageHeading)
        cy.xpath(AgencySelectors.entityTypeDropDown).click()
        cy.get(AgencySelectors.selectEntitytype).should('be.visible').click()
        cy.xpath(AgencySelectors.taxBasisDropDown).click()
        cy.get(AgencySelectors.selectTaxBasis).should('be.visible').click()
        cy.xpath(AgencySelectors.stateOfIncorporationDropDown).click()
        cy.get(AgencySelectors.selectStateOfIncorporation).should('be.visible').click()
        cy.xpath(AgencySelectors.saveAndContinueBtn).should('be.visible').click()
    }
    addHubAnalyticsUserWithOwnerAccessInAgency(firstname,lastname,email,phonenumber){
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
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text',"User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    addHubAnalyticsUserWithFullAccessInAgency(firstname,lastname,email,phonenumber){
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
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text',"User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    addHubAnalyticsUserWithStandardAccessInAgency(firstname,lastname,email,phonenumber){
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
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text',"User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    addHubAnalyticsUserWithReadOnlyAccessInAgency(firstname,lastname,email,phonenumber){
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
        cy.xpath(AgencySelectors.verifyUserDetails).should('be.visible').and('contain.text',"User Details")
        cy.xpath(AgencySelectors.createUserBtn).click()
        cy.wait(2000)
    }
    publishingRequirmentSettings(){
        cy.xpath(AgencySelectors.publishingRequirments).should('be.visible').click()
        cy.xpath(AgencySelectors.publishingRequirmentPageHeading).should('be.visible').and('contain.text',"Publishing Requirements Settings")
        cy.xpath(AgencySelectors.publishingRequirmentEditBtn).should('be.visible').click()
        for (let i = 0; i <= 28; i++) {
            cy.xpath(AgencySelectors.publishingRequirmentsCheckBoxes).eq(i).click();
        }
        cy.xpath(AgencySelectors.saveBtn).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(AgencySelectors.publishingRequirmentEditBtn).should('be.visible').click()
        for (let i = 0; i <= 28; i++) {
            cy.xpath(AgencySelectors.publishingRequirmentsCheckBoxes).eq(i).click();
        }
        cy.xpath(AgencySelectors.saveBtn).should('be.visible').click()
    }
    filterAgencyAsActive(){
        cy.xpath(AgencySelectors.agencyFilterDropDown).click()
        cy.get(AgencySelectors.selectActiveFilter).click()
        cy.get('[class*=" common-shadow-light "]').each(($element) => {
            cy.wrap($element).find('div').should('be.visible');
        })
    }

    filterAgencyAsDeActiveted(){
        cy.xpath(AgencySelectors.agencyFilterDropDown).click()
        cy.get(AgencySelectors.selectDeactivetedFilter).click()
        cy.get('[class*=" common-shadow-light "]').each(($element) => {
            cy.wrap($element).find('div').contains('Deactivated').should('be.visible');
        })
    }
    deactivateAnAgency(){
        cy.xpath(AgencySelectors.deactivateModal).should('be.visible').and('contain.text',"Deactivate Account")
        cy.xpath(AgencySelectors.yesBtn).click()
        cy.xpath(AgencySelectors.deactivateAgencySuccessMessage).should('be.visible').and('contain.text',"Deactivated Successfully.")
        // cy.xpath(AgencySelectors.verifyAgencyIsDeactivated).should('be.visible').and('contain.text',"Deactivated")
    }
    activateAnAgency(){
        cy.xpath(AgencySelectors.activateModal).should('be.visible').and('contain.text',"Activate Account")
        cy.xpath(AgencySelectors.yesBtn).click()
        // cy.xpath(AgencySelectors.verifyAgencyIsDeactivated).should('be.visible').and('contain.text',"Deactivated")
    }

}

