import { loginSelectors } from "../elements/login_elements";
export class LoginPage {
 open(url){
    cy.visit(url)
    cy.get("button[type='button']").click()
 }
//  clickLoginBtn(){
//     cy.get(loginSelectors.loginBtn).click()
//  }
 submitEmptyLoginForm(){
   const creds = {}

   cy.origin('https://tggaccountingdev.b2clogin.com/', {args:creds}, ({})=>{
      const loginNextBtn='#next'
      cy.get(loginNextBtn).click()
   })
   //  cy.get(loginSelectors.loginNextBtn).click()
 }
 submitLoginFormWithPasswordOnly(password){
   const creds = {password}
   cy.origin('https://tggaccountingdev.b2clogin.com/',{args:creds},({password})=>{
      const passwordField='#password'
      const loginNextBtn='#next'
      cy.get(passwordField).type(password)
      cy.get(loginNextBtn).click()
   })
    
 }
 submitLoginFormWithUsernameOnly(username){
   const creds = {username}

   cy.origin('https://tggaccountingdev.b2clogin.com/',{args:creds},({username})=>{
     const userNameField='#signInName'
     const loginNextBtn='#next'
     cy.get(userNameField).type(username)
     cy.get(loginNextBtn).click()
   })
    
 }
 submitLoginForm(username,password){
   const creds = {username, password}

   cy.origin('https://tggaccountingdev.b2clogin.com/', {args:creds}, ({username, password})=>{
      const userNameField='#signInName'
      const passwordField='#password'
      const loginNextBtn='#next'
      cy.get(userNameField).type(username)
      cy.get(passwordField).type(password)
      cy.get(loginNextBtn).click()
      cy.wait(2000)
   })
 }
 verifyEmailErrorIsDisplayed(enterEmailErrorMessage){
   const creds = {enterEmailErrorMessage}

   cy.origin('https://tggaccountingdev.b2clogin.com/', {args:creds}, ({enterEmailErrorMessage})=>{
      const pleaseEnterEmailAdressError=':nth-child(1) > .error > p'   
      cy.get(pleaseEnterEmailAdressError).should('contains.text',enterEmailErrorMessage)
   })
    
 }
 verifyPasswordErrorIsDisplayed(enterPasswordErrorMessage){
   const creds = {enterPasswordErrorMessage}

   cy.origin('https://tggaccountingdev.b2clogin.com/', {args:creds}, ({enterPasswordErrorMessage})=>{
      const pleaseEnterPasswordError=':nth-child(2) > .error > p'
      cy.get(pleaseEnterPasswordError).should('include.text',enterPasswordErrorMessage)
   })
    
 }
 verifyUserNotFoundErrorIsDisplayed(userNotFoundErrorMessage){
   const creds = {userNotFoundErrorMessage}

   cy.origin('https://tggaccountingdev.b2clogin.com/',{args:creds},({userNotFoundErrorMessage})=>{
      const userNotFoundError ='.pageLevel > p'
      cy.get(userNotFoundError).should('include.text',userNotFoundErrorMessage)
   })
    
 }
 verifyPasswordIncorrectErrorIsDisplayed(incorrectPasswordErrorMessage){
   const creds = {incorrectPasswordErrorMessage}

   cy.origin('https://tggaccountingdev.b2clogin.com/',{args:creds},({incorrectPasswordErrorMessage})=>{
      const incorrectPasswordError ='.pageLevel > p'
      cy.get(incorrectPasswordError).should('include.text',incorrectPasswordErrorMessage)
   })
 }
 verifyManageAgencyPageIsDisplayed(manageAgencyPageTitle){
  //  cy.xpath(loginSelectors.manageAgencyPageHeader).should('be.visible').and('contain.text', 'Agency Accounts')
    cy.title().should('eq',manageAgencyPageTitle)
 }
 login(url, username, password){
   this.open(url)
   this.submitLoginForm(username,password)
   cy.wait(3000)
 }
}