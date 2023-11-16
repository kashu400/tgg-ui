import { LoginPage } from "../pages/login.page";
const loginPage = new LoginPage()
describe('Login Feature', () => {
  
  it('Login with empty credentials', () => {
    loginPage.open('/')
    loginPage.submitEmptyLoginForm()
    loginPage.verifyEmailErrorIsDisplayed("Please enter your Email Address")
    loginPage.verifyPasswordErrorIsDisplayed("Please enter your password")
  })

  it('Login with empty username and valid password', () => {
    loginPage.open('/')
    loginPage.submitLoginFormWithPasswordOnly('Test123!')
    loginPage.verifyEmailErrorIsDisplayed("Please enter your Email Address")
  })

  it('Login with valid username and empty password', () => {
    loginPage.open('/')
    loginPage.submitLoginFormWithUsernameOnly('neel@hypertrends.com')
    loginPage.verifyPasswordErrorIsDisplayed("Please enter your password")
  })

  it('Login with invalid username and valid password', () => {
    loginPage.open('/')
    loginPage.submitLoginForm('neell1234@hypertrends.com','Test123!')
    loginPage.verifyUserNotFoundErrorIsDisplayed("User not found for the criteria provided.")
  })

  it('Login with valid username and invalid password', () => {
    loginPage.open('/')
    loginPage.submitLoginForm('neel@hypertrends.com','Test12345!')
    loginPage.verifyPasswordIncorrectErrorIsDisplayed("Your password is incorrect.")
  })

  it('Login with valid username and password', () => {
    loginPage.open('/')
    loginPage.submitLoginForm(Cypress.env('userName'), Cypress.env('password'))
    loginPage.verifyManageAgencyPageIsDisplayed("Manage Agency")
  })
  

})