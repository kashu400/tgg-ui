import { GlobalUser } from "../pages/globalUser.page";
import { LoginPage } from "../pages/login.page";
const globalUser = new GlobalUser()
const loginPage = new LoginPage

const randomName = Math.floor(Math.random() * 100).toString().padStart(1, '0')
const firstName=`Danish${randomName}`
const lastName=`tester`
const randomEmail = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
const Email=`danish.shaukat${randomEmail}@gmail.com`



describe('Add global users',()=>{
    it('Add global user as an owner permission',()=>{
      loginPage.login("/", Cypress.env('userName'), Cypress.env('password')) 
      globalUser.clickGlobalAdminUser()
      globalUser.createGlobalUserWithOwnerPermission(firstName,lastName,Email)

    })
    it('Add global user with standard access permission',()=>{
      loginPage.login("/", Cypress.env('userName'), Cypress.env('password')) 
      globalUser.clickGlobalAdminUser()
      globalUser.createGlobalUserWithStandardAccessPermission(firstName,lastName,Email)

    })
})