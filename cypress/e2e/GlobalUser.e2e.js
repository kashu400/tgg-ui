import { GlobalUser } from "../pages/globalUser.page";
import { LoginPage } from "../pages/login.page";
import { TestData } from "../Helpers/testData";

const globalUser = new GlobalUser()
const loginPage = new LoginPage


describe('Add global users',()=>{
    it('Add global user as an owner permission',()=>{
      loginPage.login("/", Cypress.env('userName'), Cypress.env('password')) 
      globalUser.clickGlobalAdminUser()
      globalUser.createGlobalUserWithOwnerPermission(TestData.firstName,TestData.lastName,TestData.Email)

    })
    it('Add global user with standard access permission',()=>{
      loginPage.login("/", Cypress.env('userName'), Cypress.env('password')) 
      globalUser.clickGlobalAdminUser()
      globalUser.createGlobalUserWithStandardAccessPermission(TestData.firstName,TestData.lastName,TestData.Email)

    })
})