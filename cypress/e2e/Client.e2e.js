import { ClientPage } from "../pages/client.page";
import { AgencyPage } from "../pages/agency.page";
import { LoginPage } from "../pages/login.page";
import { TestData } from "../Helpers/testData";

const loginPage = new LoginPage()
const agencyPage = new AgencyPage()
const clientPage = new ClientPage()


describe('TGG client features',()=>{
    beforeEach(() => {
        loginPage.login("/", Cypress.env('userName'), Cypress.env('password'))
        cy.wait(2000)
        agencyPage.searchAgency("automation")
        const addClientIcon = `//span[text()="automation"]/../../../../div[@class="flex w-full pt-2"]//*[@stroke="currentColor"]`
        cy.xpath(addClientIcon).first().should('be.visible').click()
        clientPage.searchClientInAgency("TGG client5878")
    });

    it('Add advisor in Tgg client',()=>{
      clientPage.addAdvisorInClient(TestData.instituationName,TestData.contactFirstName,"user",TestData.contactEmail)
    })

    // it('Add managment and ownership in Tgg client',()=>{
    //     clientPage.addExectiveMemberInClient(TestData.executiveFirstName,"user",TestData.executiveEmail)
    // })

    it('Add client users in Tgg client',()=>{
        clientPage.addClientUsersInClient(TestData.clientUserFirstName,"user",TestData.clientUserEmail)
    })

    it('Add Accounting Team in Tgg client',()=>{
        clientPage.addAgencyAccountingTeam()
    })

    it('Add company long term goal in client',()=>{
      clientPage.addCompanyLongTermGoalInClient(TestData.longTermCompanyGoal)
    })

    it('Edit long term company goal',()=>{
      clientPage.addCompanyLongTermGoalInClient(TestData.longTermCompanyGoal)
      clientPage.editLongTermGoal("Edit test data")
    })

    it('Delete long term company goal',()=>{
      // clientPage.addCompanyLongTermGoalInClient(longTermCompanyGoal)
      clientPage.deleteLongTermGoal()
    })

    it('Add company goal with graph type line in client',()=>{
      clientPage.addCompanyGoalWithGraphTypeLine(TestData.goalTitle,"3.5")
    })

    it('Add company goal with graph type bar in client',()=>{
        clientPage.addCompanyGoalWithGraphTypeBar(TestData.graphTypeBarGoalTitle,"2.5")
    })

    it('Add company goal with graph type none in client',()=>{
        clientPage.addCompanyGoalWithGraphTypeNone(TestData.graphTypeNoneGoalTitle,"7.5")
    })

    it('Search for company goal',()=>{
      clientPage.searchCompanyGoal("Testing Goal 1558")
    })

    it('Reorder company goals',()=>{
      clientPage.reorderCompanyGoals()
    })

    it('Add note in company goal',()=>{
      clientPage.addNoteInCompanyGoal(TestData.goalNotes)
    })

    it('Edit notes in company goal',()=>{
      // clientPage.addNotesInCompanyGoal(TestData.goalNotes)
      clientPage.editNoteInCompanyGoal("Notes are edited")
    })

    it('Delete note in company goal',()=>{
      // clientPage.addNotesInCompanyGoal(TestData.goalNotes)
      clientPage.deleteNoteInCompanyGoal()
    })

    it('Unlock a company goal',()=>{
      clientPage.addCompanyGoalWithGraphTypeBar(TestData.unlockGoalTitle,"2.5")
      clientPage.searchCompanyGoal(TestData.unlockGoalTitle)
      const companyGoalMenuBtn = `//div[text()="${TestData.unlockGoalTitle}"]//parent::div//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.unlockCompanyGoal()
    })

    it('Archive a company goal',()=>{
      clientPage.addCompanyGoalWithGraphTypeBar(TestData.archiveGoalTitle,"2.5")
      clientPage.searchCompanyGoal(TestData.archiveGoalTitle)
      const companyGoalMenuBtn = `//div[text()="${TestData.archiveGoalTitle}"]//parent::div//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.unlockCompanyGoal()
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.archiveCompanyGoal()
    })

    it('Restore an archived company goal',()=>{
      clientPage.addCompanyGoalWithGraphTypeBar(TestData.restoreGoalTitle,"2.5")
      clientPage.searchCompanyGoal(TestData.restoreGoalTitle)
      const companyGoalMenuBtn = `//div[text()="${TestData.restoreGoalTitle}"]//parent::div//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.unlockCompanyGoal()
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.archiveCompanyGoal()
      cy.get('.text-neutrals5').click()
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.restoreArchiveCompanyGoal()
    })

    it('Lock a company goal',()=>{
      clientPage.addCompanyGoalWithGraphTypeBar(TestData.lockGoalTitle,"2.5")
      clientPage.searchCompanyGoal(TestData.lockGoalTitle)
      const companyGoalMenuBtn = `//div[text()="${TestData.lockGoalTitle}"]//parent::div//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.unlockCompanyGoal()
      cy.xpath(companyGoalMenuBtn).click()
      clientPage.lockCompanyGoal()
    })

    it('Add data set in TGG client',()=>{
      clientPage.addDataSetInTggClient(TestData.dataSetName,TestData.listName,TestData.listElement,TestData.variableName,TestData.description)
    })

    it('Edit data set in Tgg client',()=>{
      clientPage.addDataSetInTggClient(TestData.editDataSetName,TestData.editListName,TestData.editListElement)
      const dataSetMenuBtn = `//div[text()="${TestData.editDataSetName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(dataSetMenuBtn).click()
      clientPage.editDataSetInTggClient("Data sets are edited")
    })

    it('Archive data set in Tgg client',()=>{
      clientPage.addDataSetInTggClient(TestData.archiveDataSetName,TestData.archiveListName,TestData.archiveListElement)
      const dataSetMenuBtn = `//div[text()="${TestData.archiveDataSetName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(dataSetMenuBtn).click()
      clientPage.archiveDataSetInTggClient()
    })

    it('Restore an Archived data set in Tgg client',()=>{
      clientPage.addDataSetInTggClient(TestData.restoreDataSetName,TestData.restoreListName,TestData.restoreListElement)
      const dataSetMenuBtn = `//div[text()="${TestData.restoreDataSetName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
      cy.xpath(dataSetMenuBtn).click()
      clientPage.archiveDataSetInTggClient()
      cy.get('.text-neutrals5').first().click()
      cy.xpath(dataSetMenuBtn).click()
      clientPage.restoreAnArchiveDataSetInTggClient()
    })

    // it.only('Add list in TGG client',()=>{
    //   clientPage.addListInTggClient(TestData.listName,TestData.listElement)
    // })

    // it('Edit list in Tgg client',()=>{
    //   clientPage.addListInTggClient(TestData.editListName,TestData.editListElement)
    //   const listMenuBtn = `//div[text()="${TestData.editListName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
    //   cy.xpath(listMenuBtn).click()
    //   clientPage.editListInTggClient("List is edited","element is edited")
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

    // it('Archive list in Tgg client',()=>{
    //   clientPage.addListInTggClient(TestData.archiveListName,TestData.archiveListElement)
    //   const listMenuBtn = `//div[text()="${TestData.archiveListName}"]//parent::div//parent::div//button[@class="szh-menu-button"]`
    //   cy.xpath(listMenuBtn).click()
    //   clientPage.archiveListInTggClient()
    // })

    it('Create folder in Tgg client documents',()=>{
      clientPage.createFolderInDocuments(TestData.folderName)
    })

    it('Rename folder in Tgg client documents',()=>{
      clientPage.createFolderInDocuments(TestData.renameFolderName)
      const folderMenuBtn = `//div[text()="${TestData.renameFolderName}"]//parent::div//parent::div//parent::div//parent::div//button`
      cy.xpath(folderMenuBtn).click()
      clientPage.renameFolder(TestData.renameFolder)
    })

    it('Delete folder in Tgg client documents',()=>{
      clientPage.createFolderInDocuments(TestData.deleteFolderName)
      const folderMenuBtn = `//div[text()="${TestData.deleteFolderName}"]//parent::div//parent::div//parent::div//parent::div//button`
      cy.xpath(folderMenuBtn).click()
      clientPage.deleteFolder()
    })

    it('Upload documents in the folder',()=>{
      clientPage.createFolderInDocuments(TestData.uploadDocFolderName)
      const clickOnFolder = `//div[text()="${TestData.uploadDocFolderName}"]`
      cy.xpath(clickOnFolder).click()
      clientPage.uploadDocumentsInFolder()
    })

    it('Rename an uploaded file in the folder',()=>{
      clientPage.createFolderInDocuments(TestData.renameDocName)
      const clickOnFolder = `//div[text()="${TestData.renameDocName}"]`
      cy.xpath(clickOnFolder).click()
      clientPage.uploadDocumentsInFolder()
      clientPage.renameFile("edited.txt")
    })

    it('Delete an uploaded file in folder',()=>{
      clientPage.createFolderInDocuments(TestData.deleteDocName)
      const clickOnFolder = `//div[text()="${TestData.deleteDocName}"]`
      cy.xpath(clickOnFolder).click()
      clientPage.uploadDocumentsInFolder()
      clientPage.deleteFile()
    })

    it('View pdf in uploaded file',()=>{
      clientPage.createFolderInDocuments(TestData.viewDocName)
      const clickOnFolder = `//div[text()="${TestData.viewDocName}"]`
      cy.xpath(clickOnFolder).click()
      clientPage.uploadDocumentsInFolder()
      clientPage.viewPdfFile()
    })











    // it('Add profitibility recomentdation with status recommended in Tgg client',()=>{
    //   clientPage.addProfitRecommendationStatusRecommended(title)
    // })

    // it('Add profitibility recomentdation with status in Progress in Tgg client',()=>{
    //   clientPage.addProfitRecommendationStatusInProgress(title)
    // })

    // it('Add profitibility recomentdation with status implemented in Tgg client',()=>{
    //   clientPage.addProfitRecommendationStatusImplemented(title,description)
    // })

    // it('Add profitibility recomentdation with status Not implemented in Tgg client',()=>{
    //   clientPage.addProfitRecommendationStatusNotImplemented(title)
    // })
})