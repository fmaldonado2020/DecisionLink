/// <reference types="Cypress" />

import LoginPageObjects from '../PageObjects/LoginPageObjects'
import TopMenuPageObjects from '../PageObjects/TopMenuPageObjects'
import CaseStudiesPageObjects from '../PageObjects/CaseStudiesPageObjects'

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
        
        cy.fixture('casestudies').then(function(caseData)
        {
          globalThis.caseData = caseData
        })

        /*Opening page in the url stored in enviromental variables*/
        cy.visit(Cypress.env('url'))

         /*Creating objects to access to objects and actions of different pages*/
        globalThis.loginPage = new LoginPageObjects()
        globalThis.topMenu = new TopMenuPageObjects()
        globalThis.caseStudies = new CaseStudiesPageObjects()
      })
    
      after(() => {
        // Test clean up after all tests are finished
        caseStudies.caseStudiesCleanUp()
        topMenu.naviageToCaseStudies()
        caseStudies.deleteCase()
        cy.log('Logging out after all tests execution.')
        topMenu.logOut()
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

    it('Add a new case', function(){
      /*From dashboard or any page that have the top bar, navigate to hypotheses page*/
      topMenu.naviageToCaseStudies()

       /*Search for a company so we can move on in to the next process*/
      caseStudies.addNewCaseStudies(caseData.company, caseData.model)
  })

  it('TestFailure', function(){
    /*From dashboard or any page that have the top bar, navigate to hypotheses page*/
    cy.url().should('include', 'fail')
     
})


  it('Validate sections of the case', function(){
  
     /*Add a new testimonial to the newly created case*/
    caseStudies.addNewTestimonialToCase(caseData.firstName, caseData.lastName, caseData.testimonial)

     /*Add a new section to the newly created case*/
    caseStudies.addSectionToCase(caseData.sectionType, caseData.sectionDescription, caseData.media, caseData.videoUrl, caseData.mediaDescription)

    /*Add a new benefit to the newly created case*/
    caseStudies.addBenefitsToCase(caseData.benefit,caseData.improvement,caseData.benefitType)
  })
})