import{globalUserSelectors} from "../elements/globalUser_elements";


export class GlobalUser{
  clickGlobalAdminUser(){
    cy.get(globalUserSelectors.globalAdminUserMenu).click()
    cy.xpath(globalUserSelectors.addGlobalUserBtn).click()
    cy.wait(2000)
  }
  createGlobalUserWithOwnerPermission(firstname,lastname,email){
    cy.get(globalUserSelectors.firstName).type(firstname)
    cy.get(globalUserSelectors.lastName).type(lastname)
    cy.get(globalUserSelectors.Email).type(email)
    cy.get(globalUserSelectors.ownerCheckBox).eq(0).click({ force: true })
    cy.xpath(globalUserSelectors.createGlobalUserBtn).click()
    cy.wait(2000)
  }
  createGlobalUserWithStandardAccessPermission(firstname,lastname,email){
    cy.get(globalUserSelectors.firstName).type(firstname)
    cy.get(globalUserSelectors.lastName).type(lastname)
    cy.get(globalUserSelectors.Email).type(email)
    cy.get(globalUserSelectors.standardAccessCheckBox).eq(1).click({ force: true })
    cy.xpath(globalUserSelectors.createGlobalUserBtn).click()
    cy.wait(2000)

  }


}