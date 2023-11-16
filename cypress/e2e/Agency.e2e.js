import { AgencySelectors } from "../elements/agency_elements";
import { AgencyPage } from "../pages/agency.page";
import { LoginPage } from "../pages/login.page";
import { TestData } from "../Helpers/testData";

const loginPage = new LoginPage()
const agencyPage = new AgencyPage()

//This is to generate random data for agency and add client
const randomString = Math.floor(Math.random() * 100000).toString().padStart(5, '0')
const randomSlug = Math.floor(Math.random() * 10000).toString().padStart(4, '9')
const agencyName = `test_agency ${randomString}`
const deactiveAgencyName = `test_agency ${randomString}`
const agencyAddress = `automated_test_address_${randomString}`
const agencyCity = `automated_test_city_${randomString}`
const agencySlug = `testslug-${randomSlug}`
const searchAgencySlug = `testslug-${randomString}`
const clientName = `TGG client${randomString}`
const orgAddress1 = `organization test address${randomString}`
const orgCity = `test city${randomString}`
const orgWebsite = `test${randomString}.com`
const orgTagline = `Testing${randomString}`
const orgBusinessOverview = `This bussiness is about testing${randomString}`
const hubAnalyticUserFirstName = `test${randomString}`
const hubAnalyticOwnerEmail = `danish.shaukat.${randomString}@gmail.com`
const hubAnalyticFullAccessEmail = `daanish.shaukat${randomString}@gmail.com`
const hubAnalyticStandardEmail = `danish.shaukat.tgg${randomString}@gmail.com`
const hubAnalyticReadOnlyEmail = `danish.shaukat.qa${randomString}@gmail.com`



describe('Add Agency Feature', () => {
  beforeEach(()=>{
    loginPage.login("/", Cypress.env('userName'), Cypress.env('password'))  
  });
    it('Add Agency with valid credentials', () => {
      agencyPage.clickAddAgencyAccountBtn()  
      agencyPage.addAgency("Add Agency",TestData.agencyName,TestData.agencyAddress,TestData.agencyCity,"90251","2123456789",TestData.agencySlug) 
    })

    it('Add client in agency', () => { 
      agencyPage.searchAgency("automation")
      const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addClientInAgency("Add Client",TestData.clientName,"Organization Profile",TestData.orgAddress1,TestData.orgCity,"90251",TestData.orgWebsite,"2123456789",TestData.orgTagline,TestData.orgBusinessOverview,"Financial Profile")
    });
    it('Add hub analytics user with owner permission in agency',()=>{
      agencyPage.searchAgency("automation")
      const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithOwnerAccessInAgency(TestData.hubAnalyticUserFirstName,TestData.hubAnalyticUserLastName,hubAnalyticOwnerEmail,"2123456789")
    })

    it('Add hub analytics user with full access in agency',()=>{
      agencyPage.searchAgency("automation")
      const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithFullAccessInAgency(hubAnalyticUserFirstName,"User",hubAnalyticFullAccessEmail,"2123456789")
    })

    it('Add hub analytics user with standard access in agency',()=>{
      agencyPage.searchAgency("automation")
      const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithStandardAccessInAgency(hubAnalyticUserFirstName,"User",hubAnalyticStandardEmail,"2123456789")
    })

    it('Search an agency on agency page', ()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.clickAddAgencyAccountBtn()  
      agencyPage.addAgency("Add Agency",TestData.agencyName,TestData.agencyAddress,TestData.agencyCity,"90251","2123456789",TestData.agencySlug)
      agencyPage.searchAgency("automation")
  
    })
    
    it('Add hub analytics user with read only access in agency',()=>{
      agencyPage.searchAgency("automation")
      const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithReadOnlyAccessInAgency(hubAnalyticUserFirstName,"User",hubAnalyticReadOnlyEmail,"2123456789")
    })

    // it('Publishing requirments settings in agency',()=>{
    //   agencyPage.searchAgency("automation")
    //   const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
    //   cy.xpath(addClientIcon).first().should('be.visible').click()
    //   agencyPage.publishingRequirmentSettings()
    // })

    it.only('Deactivate and activate an agency',()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.clickAddAgencyAccountBtn()  
      agencyPage.addAgency("Add Agency",TestData.deactiveAgencyName,TestData.agencyAddress,TestData.agencyCity,"90251","2123456789",TestData.agencySlug)
      cy.wait(5000)
      agencyPage.searchAgency(TestData.deactiveAgencyName)
      const deactivateAgencyIcon = `//span[text()='${TestData.deactiveAgencyName}']/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(deactivateAgencyIcon).last().should('be.visible').click()
      agencyPage.deactivateAnAgency()
      cy.wait(2000)
      cy.xpath(deactivateAgencyIcon).last().should('be.visible').click()
      agencyPage.activateAnAgency()
    })

    it('Filter agencies as active',()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.filterAgencyAsActive()
    })

    it('Filter agencies as deactivated',()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.filterAgencyAsDeActiveted()
    })


})    