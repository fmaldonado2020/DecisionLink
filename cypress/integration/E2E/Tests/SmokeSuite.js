/// <reference types="Cypress" />

import LoginPageObjects from '../PageObjects/LoginPageObjects'
import TopMenuPageObjects from '../PageObjects/TopMenuPageObjects'
import HypothesesPageObjects from '../PageObjects/HypothesesPageObjects'
import ValueCasePageObjects from '../PageObjects/ValueCasePageObjects'

describe('Smoke Suite', function()
{
    before(function() {
       /*Preparing the data that is going to be using during the test,
       including the enviroment url and the users used in the actual test*/
        cy.log('Data preparation before test.')
     
       /*Obtaining information of the admin user to login using username and password*/
        cy.fixture('users').then(function(data)
        {
          globalThis.data = data
        })
        
        cy.fixture('hypothesescase').then(function(hypothesesCase)
        {
          globalThis.hypothesesCase = hypothesesCase
        })

        /*Opening page in the url stored in enviromental variables*/
        cy.visit(Cypress.env('url'))

         /*Creating objects to access to objects and actions of different pages*/
        globalThis.loginPage = new LoginPageObjects()
        globalThis.topMenu = new TopMenuPageObjects()
        globalThis.hypotheses = new HypothesesPageObjects()
        globalThis.valueCase = new ValueCasePageObjects()
      })
    
      after(() => {
        // Test clean up after all tests are finished
        cy.log('Logging out after all tests execution.')
        //topMenu.logOut()
      })

    
  

    it('Login', function(){
      /*Typing username and password, then click on 'Log In' button*/
      cy.log('Typing username and password.')  
      loginPage.typeInEmailTextBox(data.username)
      loginPage.typeInPasswordTextBox(data.password)
      cy.log('Clicking on "Log in" button.')  
      loginPage.clickLogInButton()
     
      /*Assert that the actual url is equal to the actual url*/
      cy.url().should('contain','/dashboard') 
    })

    it('Hypotheses workflow', function(){
      /*From dashboard or any page that have the top bar, navigate to hypotheses page*/
      topMenu.naviageToHypotheses()
      hypotheses.addNewHypotheses()

      /*Search for a company so we can move on in to the next process*/
      valueCase.searchCompany(hypothesesCase.company)
      valueCase.defineScenario(hypothesesCase.category)
     
  })
})