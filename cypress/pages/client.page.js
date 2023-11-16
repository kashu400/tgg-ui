import { ClientSelectors } from "../elements/client_elements";
import { AgencySelectors } from "../elements/agency_elements";

export class ClientPage{
    searchClientInAgency(clientname){
        cy.wait(3000)
        cy.get(AgencySelectors.searchField).click().should('be.visible').type(clientname)
        cy.xpath(ClientSelectors.clientName).should('be.visible').click()
    }
    addAdvisorInClient(instituationname,contactfirstname,contactlastname,contactemail){
      cy.xpath(ClientSelectors.addAdvisorBtn).click().then(($form)=>{
        cy.xpath(ClientSelectors.addAdvisorModal).should('be.visible').and('contain.text',"Add Advisors")
        cy.get(ClientSelectors.instituationName).type(instituationname)
        cy.get(ClientSelectors.contactFirstName).type(contactfirstname)
        cy.get(ClientSelectors.contactLastName).type(contactlastname)
        cy.get(ClientSelectors.contactEmail).type(contactemail)
        cy.xpath(ClientSelectors.advisorTypeDropDown).click() 
        cy.xpath(ClientSelectors.selectAdvisorType).click()
        cy.xpath(ClientSelectors.savaAndCloseBtn).click()

      })
      
    }
    // addExectiveMemberInClient(executivetfirstname,executivelastname,exectutivemail){
    //   cy.xpath(ClientSelectors.addExecutiveMemberBtn).click()
    //   cy.xpath(ClientSelectors.selectAddExectiveMember).first().should('be.visible').click()
    //   cy.wait(3000)
    //   cy.xpath(ClientSelectors.addExecutiveMemberBtn).click().then(()=>{
    //     cy.xpath(ClientSelectors.selectAddExectiveMember).first().should('be.visible').click().then(()=>{
    //         cy.xpath(ClientSelectors.addClientExectiveModal).should('be.visible').and('contain.text',"Add Client Executive").then(($form)=>{
    //             cy.wrap($form).find(ClientSelectors.executiveFirstName).should('be.visible').type(executivetfirstname)
    //             cy.wrap($form).find(ClientSelectors.executiveLastName).should('be.visible').type(executivelastname)
    //             cy.wrap($form).find(ClientSelectors.executiveEmail).should('be.visible').type(exectutivemail)
    //             cy.xpath(ClientSelectors.executiveRoleDropDown).should('be.visible').click() 
    //             cy.xpath(ClientSelectors.selectExecutiveRole).should('be.visible').click()
    //             cy.xpath(ClientSelectors.inviteUserToPlatformCheckBox).should('be.visible').click()
    //             //   cy.xpath(ClientSelectors.addExecutiveBtn).should('be.visible').click()
    //         })
    //       })
    //   })
    // }
    addClientUsersInClient(clientuserfirstname,clientuserlastname,clientuseremail){
      cy.xpath(ClientSelectors.addClientUsersBtn).click()
      cy.wait(2000)
      cy.xpath(ClientSelectors.addClientUsersBtn).click({force:true}).then(() => {
        cy.get(ClientSelectors.addClientUserModal).should('be.visible').then(($form) => {
            cy.wrap($form).find(ClientSelectors.addClientUserFirstName).should('be.visible')
            .type(clientuserfirstname)
            cy.wrap($form).find(ClientSelectors.addClientUserLastName).should('be.visible')
            .type(clientuserlastname)
            cy.wrap($form).find(ClientSelectors.addClientUserEmail).should('be.visible')
            .type(clientuseremail)
            cy.xpath(ClientSelectors.inviteClientUserBtn).click()
        })
      })
    }
    addAgencyAccountingTeam(){
        cy.xpath(ClientSelectors.addAccountingTeamBtn).click()
        cy.wait(3000)
        cy.xpath(ClientSelectors.addAccountingTeamBtn).click({force:true})
        cy.xpath(ClientSelectors.addAccountingTeamModal).should('be.visible').and('contain.text',"Add Accounting Team").then(()=>{
            cy.xpath(ClientSelectors.accountingTeamRoleDropDown).should('be.visible').click() 
            cy.xpath(ClientSelectors.selectAccountingRole).should('be.visible').click()
            for (let i = 0; i < 3; i++) {
                cy.xpath(ClientSelectors.selectHubAnalyticsUsers).eq(i).click();
            }
            cy.xpath(ClientSelectors.saveAndCloseBtn).click()
        }) 
    }
    addCompanyLongTermGoalInClient(longtermgoal){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.longTermGoalCreateBtn).should('be.visible').click()
      cy.xpath(ClientSelectors.longTermCompanyGoalModal).should('be.visible').and('contain.text',"Create Long Term Company Goal")
      cy.get(ClientSelectors.longTermCompanyGoalTextField).type(longtermgoal)
      cy.xpath(ClientSelectors.longTermGoalSaveBtn).click()
    }
    editLongTermGoal(editlongtermgoal){
      // cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      // cy.title().should('eq',"Company Goals")
      // // cy.get(ClientSelectors.editLongTermGoalBtn).first().click()
      cy.get(ClientSelectors.editLongTermGoalBtn).then(($elements) => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        cy.wrap($elements).eq(randomIndex).click();
      });
      cy.xpath(ClientSelectors.editLongTermCompanyGoalModal).should('be.visible').and('contain.text',"Edit Long Term Company Goal")
      cy.get(ClientSelectors.longTermCompanyGoalTextField).type(editlongtermgoal)
      cy.xpath(ClientSelectors.longTermGoalSaveBtn).click()
    }
    deleteLongTermGoal(){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.deleteGoalBtn).then(($elements) => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        cy.wrap($elements).eq(randomIndex).click();
      });
    }
    addCompanyGoalWithGraphTypeLine(goaltitle,graphtargetvalue){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.addGoalBtn).click()
      cy.xpath(ClientSelectors.createGoalModal).should('be.visible').and('contain.text',"Create A Goal")
      cy.xpath(ClientSelectors.goalTitle).type(goaltitle)
      cy.xpath(ClientSelectors.goalYearDropDown).click()
      cy.xpath(ClientSelectors.selectYearFromDropDown).click()
      cy.xpath(ClientSelectors.graphTypeDropDown).click()
      cy.xpath(ClientSelectors.selectGraphTypeLine).click()
      cy.xpath(ClientSelectors.dataSourceDropDown).click()
      cy.xpath(ClientSelectors.selectDataSourceCashRatio).click()
      cy.xpath(ClientSelectors.graphTargetValueField).type(graphtargetvalue)
      cy.xpath(ClientSelectors.createGoalSaveBtn).click()
      cy.xpath(ClientSelectors.confirmModal).should('be.visible').and('contain.text',"Please Confirm")
      cy.xpath(ClientSelectors.yesBtn).click()
      // cy.xpath(ClientSelectors.clickCloseBtn).click()
    }
    addCompanyGoalWithGraphTypeBar(goaltitle,graphtargetvalue){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.addGoalBtn).should('be.visible').click()
      cy.xpath(ClientSelectors.createGoalModal).should('be.visible').and('contain.text',"Create A Goal")
      cy.xpath(ClientSelectors.goalTitle).type(goaltitle)
      cy.xpath(ClientSelectors.goalYearDropDown).click()
      cy.xpath(ClientSelectors.selectYearFromDropDown).click()
      cy.xpath(ClientSelectors.graphTypeDropDown).click()
      cy.xpath(ClientSelectors.selectGraphTypeBar).click()
      cy.xpath(ClientSelectors.dataSourceDropDown).click()
      cy.xpath(ClientSelectors.selectDataSourceQuickRatio).click()
      cy.xpath(ClientSelectors.graphTargetValueField).type(graphtargetvalue)
      cy.xpath(ClientSelectors.createGoalSaveBtn).click()
      cy.xpath(ClientSelectors.confirmModal).should('be.visible').and('contain.text',"Please Confirm")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.clickCloseBtn).click()
    }
    addCompanyGoalWithGraphTypeNone(goaltitle,graphtargetvalue){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.addGoalBtn).click()
      cy.xpath(ClientSelectors.createGoalModal).should('be.visible').and('contain.text',"Create A Goal")
      cy.xpath(ClientSelectors.goalTitle).type(goaltitle)
      cy.xpath(ClientSelectors.goalYearDropDown).click()
      cy.xpath(ClientSelectors.selectYearFromDropDown).click()
      cy.xpath(ClientSelectors.graphTypeDropDown).click()
      cy.xpath(ClientSelectors.selectGraphTypeNone).click()
      cy.xpath(ClientSelectors.dataSourceDropDown).click()
      cy.xpath(ClientSelectors.selectDataSourceCurrentRatio).click()
      cy.xpath(ClientSelectors.graphTargetValueField).type(graphtargetvalue)
      cy.xpath(ClientSelectors.createGoalSaveBtn).click()
      cy.xpath(ClientSelectors.confirmModal).should('be.visible').and('contain.text',"Please Confirm")
      cy.xpath(ClientSelectors.yesBtn).click()
      // cy.xpath(ClientSelectors.clickCloseBtn).click()
    }
    addNoteInCompanyGoal(enternalnotes){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.viewNotesBtn).click()
      cy.xpath(ClientSelectors.internalNotesModalHeading).should('be.visible').and('contain.text',"Internal Notes")
      cy.xpath(ClientSelectors.addNoteBtn).click()
      cy.xpath(ClientSelectors.enternalNotesTextField).type(enternalnotes)
      cy.xpath(ClientSelectors.saveNoteBtn).click()
      cy.xpath(ClientSelectors.noteAddedSuccessMessage).should('be.visible').and('contain.text',"Note Added!")
    }
    editNoteInCompanyGoal(editnotes){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.viewNotesBtn).click()
      cy.xpath(ClientSelectors.internalNotesModalHeading).should('be.visible').and('contain.text',"Internal Notes")
      cy.xpath(ClientSelectors.notesMenuBtn).first().click()
      cy.xpath(ClientSelectors.editNoteBtn).click()
      cy.xpath(ClientSelectors.editNotesTextField).last().clear().type(editnotes)
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.noteUpdatedSuccessMessage).should('be.visible').and('contain.text',"Notes Updated!")
    }
    deleteNoteInCompanyGoal(){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.viewNotesBtn).click()
      cy.xpath(ClientSelectors.internalNotesModalHeading).should('be.visible').and('contain.text',"Internal Notes")
      cy.xpath(ClientSelectors.notesMenuBtn).first().click()
      cy.xpath(ClientSelectors.removeNoteBtn).click()
      cy.xpath(ClientSelectors.deleteInternalNotesModalHeading).should('be.visible').and('contain.text',"Delete Internal Note")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.noteRemovedSuccessMessage).should('be.visible').and('contain.text',"Note removed!")
    }

    searchCompanyGoal(goalname){
      cy.xpath(ClientSelectors.companyGoalsMenu).first().should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.get(ClientSelectors.searchCompanyGoalField).type(goalname)
    }
    reorderCompanyGoals(){
      cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      cy.title().should('eq',"Company Goals")
      cy.xpath(ClientSelectors.reorderBtn).click()
      cy.xpath(ClientSelectors.reorderCompanyGoalModal).should('be.visible').and('contain.text',"Reorder Goals")
      const dataTransfer = new DataTransfer();
      cy.xpath(ClientSelectors.dragGoal5907).trigger('dragstart',{
        dataTransfer
      })
      cy.xpath(ClientSelectors.dropGoal8070).trigger('drop',{
        dataTransfer
      })
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.goalOrderChangeSuccessMessage).should('be.visible').and('contain.text',"Goals Order changed!")
    }

    archiveCompanyGoal(){
      // cy.xpath(ClientSelectors.companyGoalsMenu).first().should('be.visible').click()
      // cy.title().should('eq',"Company Goals")
      // cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.archiveBtn).click()
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.goalArchivedSuccessMessage).should('be.visible').and('contain.text',"Goal Archived!")
    }
    restoreArchiveCompanyGoal(){
      // cy.xpath(ClientSelectors.companyGoalsMenu).first().should('be.visible').click()
      // cy.title().should('eq',"Company Goals")
      // cy.get(ClientSelectors.showArchiveIcon).click()
      // cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.restoreBtn).first().click()
      cy.xpath(ClientSelectors.yesBtn).click()

    }
    unlockCompanyGoal(){
      // cy.xpath(ClientSelectors.companyGoalsMenu).should('be.visible').click()
      // cy.title().should('eq',"Company Goals")
      // cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.unlockBtn).click()
      cy.xpath(ClientSelectors.modalYesBtn).click()
      cy.xpath(ClientSelectors.companyGoalUnlockedSuccessMessage).should('be.visible').and('contain.text',"Company Goal Unlocked!")
    }
    lockCompanyGoal(){
      // cy.xpath(ClientSelectors.companyGoalMenuBtn).click()
      cy.xpath(ClientSelectors.lockBtn).click()
      cy.xpath(ClientSelectors.modalYesBtn).click()
      cy.xpath(ClientSelectors.companyGoalLockedSuccessMessage).should('be.visible').and('contain.text',"Company Goal locked!")
    }
    addDataSetInTggClient(datasetname,listname,listelement,variablName,variableDescriprion){
      cy.xpath(ClientSelectors.dataSetsMenuBtn).should('be.visible').click()
      cy.title().should('eq',"Data Sets & List")
      cy.xpath(ClientSelectors.createDataSetBtn).click()
      cy.xpath(ClientSelectors.createDataSetPageHeading).last().should('be.visible').and('contain.text',"Create Data Set")
      cy.get(ClientSelectors.enterDataSetNameField).type(datasetname)
      cy.xpath(ClientSelectors.monthAndYearDropDown).click()
      cy.wait(2000)
      cy.xpath(ClientSelectors.selectMonthAndYear).click({force:true})
      cy.xpath(ClientSelectors.yesOption).click()
      cy.xpath(ClientSelectors.createListBtn).click()
      cy.xpath(ClientSelectors.createListPageHeading).last().should('be.visible').and('contain.text',"Create A List")
      cy.get(ClientSelectors.listName).type(listname)
      cy.get(ClientSelectors.listElement).type(listelement)
      cy.xpath(ClientSelectors.addAnotherElementBtn).click()
      cy.get(ClientSelectors.listElement).eq(1).type(listelement)
      cy.xpath(ClientSelectors.createBtn).click()
      cy.xpath(ClientSelectors.listCreatedSuccessMessage).should('be.visible').and('contain.text',"List Created!")
      // cy.xpath(ClientSelectors.addVariableBtn).click()
      // cy.xpath(ClientSelectors.addVariableModalHeading).should('be.visible').and('contain.text',"Create New Variable")
      // cy.get(ClientSelectors.variableNameTextField).type(variablName)
      // cy.xpath(ClientSelectors.variableTypeDropDown).click()
      // cy.xpath(ClientSelectors.selectVariableType).click()
      // cy.xpath(ClientSelectors.variablePropertyDropDown).click()
      // cy.xpath(ClientSelectors.selectVariableProperty).click()
      // cy.get(ClientSelectors.variableDescriptionTextField).type(variableDescriprion)
      // cy.xpath(ClientSelectors.saveAndCloseBtn).click()
      cy.xpath(ClientSelectors.saveAndGoBackBtn).click()
      cy.xpath(ClientSelectors.dataSetCreatedSuccessMessage).should('be.visible').and('contain.text',"Data Set Created!")
    }
    addListInTggClient(listname,listelement){
      cy.xpath(ClientSelectors.dataSetsMenuBtn).should('be.visible').click()
      cy.title().should('eq',"Data Sets & List")
      cy.xpath(ClientSelectors.createListBtn).click()
      cy.xpath(ClientSelectors.createListPageHeading).last().should('be.visible').and('contain.text',"Create A List")
      cy.get(ClientSelectors.listName).type(listname)
      cy.get(ClientSelectors.listElement).type(listelement)
      cy.xpath(ClientSelectors.addAnotherElementBtn).click()
      cy.get(ClientSelectors.listElement).eq(1).type(listelement)
      cy.xpath(ClientSelectors.createBtn).click()
      cy.xpath(ClientSelectors.listCreatedSuccessMessage).should('be.visible').and('contain.text',"List Created!")
    }
    editDataSetInTggClient(editdatasetname){
      cy.xpath(ClientSelectors.editBtn).last().click()
      cy.get(ClientSelectors.enterDataSetNameField).type(editdatasetname)
      cy.xpath(ClientSelectors.monthAndYearDropDown).click()
      cy.wait(2000)
      cy.xpath(ClientSelectors.editMonthAndYear).click({force:true})
      cy.xpath(ClientSelectors.saveChangesBtn).click()
      cy.xpath(ClientSelectors.dataSetUpdatedSuccessMessage).should('be.visible').and('contain.text',"Data Set Updated!")
    }
    archiveDataSetInTggClient(){
      cy.xpath(ClientSelectors.archiveBtn).click()
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.dataSetArchivedSuccessMessage).should('be.visible').and('contain.text',"Data Set archived!")
    }
    restoreAnArchiveDataSetInTggClient(){
      cy.xpath(ClientSelectors.restoreBtn).click()
      cy.xpath(ClientSelectors.restoreDataSetModalHeading).should('be.visible').and('contain.text',"Restore data set")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.restoreDataSetSuccessMessage).should('be.visible').and('contain.text',"Data Set restored!")
    }
    editListInTggClient(editListname,editListelement){
      cy.xpath(ClientSelectors.editBtn).click()
      cy.get(ClientSelectors.listName).type(editListname)
      cy.get(ClientSelectors.listElement).eq(0).type(editListelement)
      cy.get(ClientSelectors.listElement).eq(1).type(editListelement)
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.listUpdatedSuccessMessage).should('be.visible').and('contain.text',"List Updated!")
    }
    archiveListInTggClient(){
      cy.xpath(ClientSelectors.archiveBtn).click()
      cy.xpath(ClientSelectors.archiveListModalHeading).should('be.visible').and('contain.text',"Archive List")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.listArchivedSuccessMessage).should('be.visible').and('contain.text',"List archived!")
    }
    restoreAnArchiveList(){
      cy.xpath(ClientSelectors.restoreBtn).click()
      cy.xpath(ClientSelectors.restoreListModalHeading).should('be.visible').and('contain.text',"Restore List")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.restoreListSuccessMessage).should('be.visible').and('contain.text',"List restored!")
    }
    addProfitRecommendationStatusRecommended(recommendationtitle){
      cy.xpath(ClientSelectors.profitRecommendationMenuBtn).first().should('be.visible').click()
      cy.title().should('eq',"Profitability Recommendations")
      cy.xpath(ClientSelectors.addProfitRecommendationBtn).first().click()
      cy.xpath(ClientSelectors.addRecommendationFormHeading).last().should('be.visible').and('contain.text',"Add a Profit Recommendation")
      cy.xpath(ClientSelectors.recommendationTitleField).type(recommendationtitle)
      cy.xpath(ClientSelectors.reportingPeriodDropDown).click()
      cy.xpath(ClientSelectors.selectReportingPeriod).click()
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.profitrecommendationSuccessMessage).should('be.visible').and('contain.text',"Profit Recommendation created!")
    }
    addProfitRecommendationStatusInProgress(recommendationtitle){
      cy.xpath(ClientSelectors.profitRecommendationMenuBtn).first().should('be.visible').click()
      cy.title().should('eq',"Profitability Recommendations")
      cy.xpath(ClientSelectors.addProfitRecommendationBtn).first().click()
      cy.xpath(ClientSelectors.addRecommendationFormHeading).last().should('be.visible').and('contain.text',"Add a Profit Recommendation")
      cy.xpath(ClientSelectors.recommendationTitleField).type(recommendationtitle)
      cy.xpath(ClientSelectors.reportingPeriodDropDown).click()
      cy.xpath(ClientSelectors.selectReportingPeriod).click()
      cy.xpath(ClientSelectors.statusDropDown).click()
      cy.xpath(ClientSelectors.selectInProgresStatus).click()
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.profitrecommendationSuccessMessage).should('be.visible').and('contain.text',"Profit Recommendation created!")
    }
    addProfitRecommendationStatusImplemented(recommendationtitle,outcome){
      cy.xpath(ClientSelectors.profitRecommendationMenuBtn).first().should('be.visible').click()
      cy.title().should('eq',"Profitability Recommendations")
      cy.xpath(ClientSelectors.addProfitRecommendationBtn).first().click()
      cy.xpath(ClientSelectors.addRecommendationFormHeading).last().should('be.visible').and('contain.text',"Add a Profit Recommendation")
      cy.xpath(ClientSelectors.recommendationTitleField).type(recommendationtitle)
      cy.xpath(ClientSelectors.reportingPeriodDropDown).click()
      cy.xpath(ClientSelectors.selectReportingPeriod).click()
      cy.xpath(ClientSelectors.statusDropDown).click()
      cy.xpath(ClientSelectors.selectImplementedStatus).click()
      cy.xpath(ClientSelectors.outcomeField).type(outcome)
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.profitrecommendationSuccessMessage).should('be.visible').and('contain.text',"Profit Recommendation created!")
    }
    addProfitRecommendationStatusNotImplemented(recommendationtitle){
      cy.xpath(ClientSelectors.profitRecommendationMenuBtn).first().should('be.visible').click()
      cy.title().should('eq',"Profitability Recommendations")
      cy.xpath(ClientSelectors.addProfitRecommendationBtn).first().click()
      cy.xpath(ClientSelectors.addRecommendationFormHeading).last().should('be.visible').and('contain.text',"Add a Profit Recommendation")
      cy.xpath(ClientSelectors.recommendationTitleField).type(recommendationtitle)
      cy.xpath(ClientSelectors.reportingPeriodDropDown).click()
      cy.xpath(ClientSelectors.selectReportingPeriod).last().click({force:true})
      cy.xpath(ClientSelectors.statusDropDown).click()
      cy.xpath(ClientSelectors.selectNotImplementedStatus).click()
      cy.xpath(ClientSelectors.outcomeField).type(outcome)
      cy.xpath(ClientSelectors.saveBtn).click()
      cy.xpath(ClientSelectors.profitrecommendationSuccessMessage).should('be.visible').and('contain.text',"Profit Recommendation created!")
    }
    createFolderInDocuments(folderName){
      cy.xpath(ClientSelectors.documentsMenuBtn).first().should('be.visible').click()
      cy.title().should('eq',"Documents")
      cy.xpath(ClientSelectors.createFolderBtn).should('be.visible').click()
      cy.xpath(ClientSelectors.createFolderModalHeading).should('be.visible').and('contain.text',"Create Folder")
      cy.get(ClientSelectors.folderNameField).type(folderName)
      cy.xpath(ClientSelectors.createBtn).click()
      cy.xpath(ClientSelectors.folderCreatedSuccessMessage).should('be.visible').and('contain.text',"Folder created!")
    }
    renameFolder(editFolderName){
      cy.xpath(ClientSelectors.renameOption).click()
      cy.xpath(ClientSelectors.renameFolderModalHeading).should('be.visible').and('contain.text',"Rename Folder")
      cy.get(ClientSelectors.folderNameField).clear().type(editFolderName)
      cy.xpath(ClientSelectors.renameBtn).click()
      cy.xpath(ClientSelectors.folderNameUpdatedSuccessMessage).should('be.visible').and('contain.text',"Folder name updated!")
    }
    deleteFolder(){
      cy.xpath(ClientSelectors.deleteOption).click()
      cy.xpath(ClientSelectors.deleteFolderModalHeading).should('be.visible').and('contain.text',"Delete Folder")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.folderDeletedSuccessMessage).should('be.visible').and('contain.text',"Folder deleted successfully")
    }
    uploadDocumentsInFolder(){
      cy.xpath(ClientSelectors.uploadBtn).first().click()
      cy.xpath(ClientSelectors.addDocumentsModalHeading).should('be.visible').and('contain.text',"Add Documents")
      cy.get(ClientSelectors.uploadDocumentField).selectFile('cypress/fixtures/TGG-Document.pdf').selectFile('cypress/fixtures/test.txt');
      cy.xpath(ClientSelectors.saveBtn).should('be.enabled').click()
      cy.xpath(ClientSelectors.documentUploadedSuccessMessage).should('be.visible').and('contain.text',"Document uploaded successfully")
    }
    renameFile(filename){
      cy.xpath(ClientSelectors.fileMeatBallMenuBtn).click()
      cy.xpath(ClientSelectors.renameOption).first().click()
      cy.xpath(ClientSelectors.editDocumentsModalHeading).should('be.visible').and('contain.text',"Edit Documents")
      cy.get(ClientSelectors.displayNameField).clear().type(filename)
      cy.xpath(ClientSelectors.saveBtn).should('be.enabled').click()
      cy.xpath(ClientSelectors.fileEditedSuccessMessage).should('be.visible').and('contain.text',"Document name updated!")
    }
    deleteFile(){
      cy.xpath(ClientSelectors.fileMeatBallMenuBtn).click()
      cy.xpath(ClientSelectors.deleteOption).first().click()
      cy.xpath(ClientSelectors.deleteDocumentsModalHeading).should('be.visible').and('contain.text',"Delete Document")
      cy.xpath(ClientSelectors.yesBtn).click()
      cy.xpath(ClientSelectors.fileDeletedSuccessMessage).should('be.visible').and('contain.text',"Document Deleted Successfully")
    }
    viewPdfFile(){
      cy.xpath(ClientSelectors.pdfFileMeatBallMenuBtn).click()
      cy.xpath(ClientSelectors.viewPdfOption).click();
    }
  
}