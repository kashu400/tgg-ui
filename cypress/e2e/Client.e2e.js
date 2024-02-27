import { ClientPage } from "../pages/client.page";
import { AgencyPage } from "../pages/agency.page";
import { LoginPage } from "../pages/login.page";
import { TestData } from "../Helpers/testData";

const loginPage = new LoginPage()
const agencyPage = new AgencyPage()
const clientPage = new ClientPage()


describe('TGG client features', () => {
  beforeEach(() => {
    loginPage.login("/", Cypress.env('userName'), Cypress.env('password'))
    cy.wait(2000)
    agencyPage.searchAgency("Automation")
    const addClientIcon = `//span[text()="Automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
    cy.xpath(addClientIcon).first().should('be.visible').click()
    clientPage.searchClientInAgency("TGG client5878")
  });

  it('Add advisor in Tgg client', () => {
    clientPage.addAdvisorInClient(TestData.instituationName, TestData.contactFirstName, "user", TestData.contactEmail)
  })

  it('Add managment and ownership in Tgg client', () => {
    clientPage.addExectiveMemberInClient(TestData.executiveFirstName, "user", TestData.executiveEmail)
  })

  it('Add client users in Tgg client', () => {
    clientPage.addClientUsersInClient(TestData.clientUserFirstName, "user", TestData.clientUserEmail)
  })

  it('Add Accounting Team in Tgg client', () => {
    clientPage.addAgencyAccountingTeam()
  })

  it('Add company long term goal in client', () => {
    clientPage.addCompanyLongTermGoalInClient(TestData.longTermCompanyGoal)
  })

  it('Edit long term company goal', () => {
    clientPage.addCompanyLongTermGoalInClient(TestData.longTermCompanyGoal)
    clientPage.editLongTermGoal("Edit test data")
  })

  it('Delete long term company goal', () => {
    // clientPage.addCompanyLongTermGoalInClient(longTermCompanyGoal)
    clientPage.deleteLongTermGoal()
  })

  it('Add company goal with graph type line in client', () => {
    clientPage.addCompanyGoalWithGraphTypeLine(TestData.goalTitle, "3.5")
  })

  it('Add company goal with graph type bar in client', () => {
    clientPage.addCompanyGoalWithGraphTypeBar(TestData.graphTypeBarGoalTitle, "2.5")
  })

  it('Add company goal with graph type none in client', () => {
    clientPage.addCompanyGoalWithGraphTypeNone(TestData.graphTypeNoneGoalTitle, "7.5")
  })

  it('Search for company goal', () => {
    clientPage.searchCompanyGoal("Testing Goal 1558")
  })

  it('Reorder company goals', () => {
    clientPage.reorderCompanyGoals()
  })

  it('Add note in company goal', () => {
    clientPage.addNoteInCompanyGoal(TestData.goalNotes)
  })

  it('Edit notes in company goal', () => {
    clientPage.addNoteInCompanyGoal(TestData.goalNotes)
    clientPage.editNoteInCompanyGoal("Notes are edited")
  })

  it('Delete note in company goal', () => {
    clientPage.addNoteInCompanyGoal(TestData.goalNotes)
    clientPage.deleteNoteInCompanyGoal()
  })

  it('Unlock a company goal', () => {
    clientPage.unlockCompanyGoal()
  })

  it.skip('Lock a company goal', () => {
    // clientPage.addCompanyGoalWithGraphTypeBar(TestData.lockGoalTitle,"2.5")
    // clientPage.searchCompanyGoal(TestData.lockGoalTitle)
    // const companyGoalMenuBtn = `//div[text()="${TestData.lockGoalTitle}"]//parent::div//parent::div//parent::div//button[@class="szh-menu-button"]`
    // cy.xpath(companyGoalMenuBtn).click()
    // clientPage.unlockCompanyGoal()
    // cy.xpath(companyGoalMenuBtn).click()
    clientPage.lockCompanyGoal()
  })

  it('Archive a company goal', () => {
    clientPage.addCompanyGoalWithGraphTypeBar(TestData.archiveGoalTitle, "2.5")
    clientPage.searchCompanyGoal(TestData.archiveGoalTitle)
    const companyGoalMenuBtn = `//div[text()="${TestData.archiveGoalTitle}"]//parent::div//parent::div//parent::div//button[@class="szh-menu-button"]`
    cy.xpath(companyGoalMenuBtn).click()
    clientPage.unlockCompanyGoal()
    cy.xpath(companyGoalMenuBtn).click()
    clientPage.archiveCompanyGoal()
  })

  it('Restore an archived company goal', () => {
    clientPage.restoreArchiveCompanyGoal()
  })

  it('Add data set in TGG client', () => {
    clientPage.addDataSetInTggClient(TestData.dataSetName, TestData.listName, TestData.listElement, TestData.variableName, TestData.description)
  })

  it('Edit data set in Tgg client', () => {
    clientPage.editDataSetInTggClient("Data set is edited")
  })

  it('Archive data set in Tgg client', () => {
    clientPage.archiveDataSetInTggClient()
  })

  it('Restore an Archived data set in Tgg client', () => {
    clientPage.restoreAnArchiveDataSetInTggClient()
  })

  it('Add list in TGG client', () => {
    clientPage.addListInTggClient(TestData.listName, TestData.listElement)
  })

  it('Edit list in Tgg client', () => {
    clientPage.editAndVerifyListInTggClient("List is edited", "element is edited")
  })

  // it('Archive list in Tgg client',()=>{
  //   // clientPage.addListInTggClient(TestData.archiveListName,TestData.archiveListElement)
  //   // const listMenuBtn = `//div[text()="${TestData.archiveListName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
  //   // cy.xpath(listMenuBtn).click()
  //   clientPage.archiveListInTggClient()
  // })

  // it('Restore an archived list in Tgg client',()=>{
  //   clientPage.addListInTggClient(TestData.restoreListName,TestData.restoreListElement)
  //   const listMenuBtn = `//div[text()="${TestData.restoreListName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
  //   cy.xpath(listMenuBtn).click()
  //   clientPage.archiveListInTggClient()
  //   cy.get('.text-neutrals5').last().click()
  //   cy.xpath(listMenuBtn).click()
  //   clientPage.restoreAnArchiveList()
  // })

  it('Create folder in Tgg client documents', () => {
    clientPage.createFolderInDocuments(TestData.folderName)
  })

  it('Rename folder in Tgg client documents', () => {
    clientPage.renameFolder(TestData.renameFolder)
  })

  it('Delete folder in Tgg client documents', () => {
    clientPage.deleteFolder()
  })

  it('Upload documents in the folder', () => {
    clientPage.uploadDocumentsInFolder()
  })

  it('Rename an uploaded file in the folder', () => {
    clientPage.renameFile(TestData.renameFile)
  })

  it('Delete an uploaded file in folder', () => {
    clientPage.deleteFile()
  })

})