import { AgencyPage } from "../pages/agency.page";
import { LoginPage } from "../pages/login.page";
import { ClientPage } from "../pages/client.page";
import { TestData } from "../Helpers/testData";

const loginPage = new LoginPage()
const agencyPage = new AgencyPage()
const clientPage = new ClientPage()


describe('Add Agency Feature', () => {
  beforeEach(()=>{
    loginPage.login("/", Cypress.env('userName'), Cypress.env('password'))  
  });
  
    it('Add Agency with valid credentials', () => {
      agencyPage.clickAddAgencyAccountBtn()  
      agencyPage.addAgency("Add Agency",TestData.agencyName,TestData.agencyAddress,TestData.agencyCity,"90251","2123456789",TestData.agencySlug) 
    })

    it('Add client in agency', () => { 
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addClientInAgency("Add Client",TestData.clientName,"Organization Profile",TestData.orgAddress1,TestData.orgCity,"90251",TestData.orgWebsite,"2123456789",TestData.orgTagline,TestData.orgBusinessOverview,"Financial Profile")
    });

    it('Search client in agency',()=>{
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      clientPage.searchClientInAgency("TGG client5878")
    })

    it('Add hub analytics user with owner permission in agency',()=>{
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithOwnerAccessInAgency(TestData.hubAnalyticUserFirstName,TestData.hubAnalyticUserLastName,TestData.hubAnalyticOwnerEmail,"2123456789")
    })

    it('Add hub analytics user with full access in agency',()=>{
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithFullAccessInAgency(TestData.hubAnalyticUserFirstName,"User",TestData.hubAnalyticFullAccessEmail,"2123456789")
    })

    it('Add hub analytics user with standard access in agency',()=>{
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithStandardAccessInAgency(TestData.hubAnalyticUserFirstName,"User",TestData.hubAnalyticStandardEmail,"2123456789")
    })

    it('Search an agency on agency page', ()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.searchAgency("SkPatel")
  
    })
    
    it('Add hub analytics user with read only access in agency',()=>{
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.addHubAnalyticsUserWithReadOnlyAccessInAgency(TestData.hubAnalyticUserFirstName,"User",TestData.hubAnalyticReadOnlyEmail,"2123456789")
    })

    it('Publishing requirments settings in agency',()=>{
      agencyPage.searchAgency("Automation")
      const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
      cy.xpath(addClientIcon).first().should('be.visible').click()
      agencyPage.publishingRequirmentSettings()
    })

    it.only('Activate an agency',()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.filterAgencyAsDeActiveted()
      agencyPage.activateAnAgency()
    })

    it.only('Deactivate an agency',()=>{
      loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
      agencyPage.filterAgencyAsActive()
      agencyPage.deactivateAnAgency()
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