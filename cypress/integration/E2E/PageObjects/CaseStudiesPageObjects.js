/// <reference types="Cypress" />

import CommonCommands from '../CommonCommands/CommonCommands'
class CaseStudiesPageObjects {

      constructor() {
        globalThis.commands = new CommonCommands()
      }

    addNewCaseStudies(companyName, modelName){
         /*Click on the "Add New" button in the case studies tab*/
         //cy.get('.uil-plus').should('be.visible').and('not.be.disabled').click()
         commands.validateElementAndClick('.uil-plus')

         /*Search for the company and then select it*/
         //cy.get('.col > .input-group > .form-control').should('be.visible').and('not.be.disabled').type(companyName)
         //cy.get("a[href='#']").should('be.visible').and('not.be.disabled').click()
         commands.validateElementAndType('.col > .input-group > .form-control',companyName)
         commands.validateElementAndClick("a[href='#']")
         
         /*Select the model and create the case*/
         //cy.get('#models').select(modelName) 
         //cy.get('div.col.d-flex.justify-content-end > .btn:nth-child(2)').should('be.visible').and('not.be.disabled').click()
         commands.validateElementAndSelect('#models',modelName)
         commands.validateElementAndClick('div.col.d-flex.justify-content-end > .btn:nth-child(2)')
        
 
         /*Verify the result message after creating the case*/
         //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Case Study was successfully saved.')
          commands.verifyAlert('Case Study was successfully saved.')
    }


    addNewTestimonialToCase(firstName, lastName, testimonial){
        /*Click on "Add new" button in testimonials section*/
        cy.wait(7000)
        //cy.get(':nth-child(1) > .card > .card-title > .btn').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(1) > .card > .card-title > .btn')

        /*Fill the testimonial form*/
       //cy.get('#firstName').should('be.visible').and('not.be.disabled').type(firstName)
       //cy.get('#lastName').should('be.visible').and('not.be.disabled').type(lastName)
       //cy.get('#testimonial').should('be.visible').and('not.be.disabled').type(testimonial)

        commands.validateElementAndType('#firstName',firstName)
        commands.validateElementAndType('#lastName',lastName)
        commands.validateElementAndType('#testimonial',testimonial)
        
        /*Submit the testimonial form*/
        //cy.get('.btn-primary-scheme > .ng-star-inserted').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick('.btn-primary-scheme > .ng-star-inserted')

         /*Verify the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Testimonial successfully saved')
        commands.verifyAlert('Testimonial successfully saved')
         
    }


    addSectionToCase(sectionType, description, mediaType, videoUrl, mediaDescription){
        /*Click on "Add new" button in new section card*/
        cy.wait(7000)
        //cy.get(':nth-child(2) > .card > .card-title > .btn').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(2) > .card > .card-title > .btn')
        
        /*Fill the section form*/
        //cy.get('#sectionType').select(sectionType) 
        //cy.get('#description').should('be.visible').and('not.be.disabled').type(description)
        commands.validateElementAndSelect('#sectionType',sectionType)
        commands.validateElementAndType('#description',description)
        
        cy.get('#description').then(() => {
            if (mediaType == "Video") {
              //cy.get('#videoUrl').should('be.visible').and('not.be.disabled').click()
              //cy.get('#videoUrlAddress').should('be.visible').and('not.be.disabled').type(videoUrl)
              //cy.get('#mediaDescription').should('be.visible').and('not.be.disabled').type(mediaDescription)
              commands.validateElementAndClick('#videoUrl')
              commands.validateElementAndType('#videoUrlAddress',videoUrl)
              commands.validateElementAndType('#mediaDescription',mediaDescription)

            } else {
              //for image media
            }
          })
       
        
        /*Submit the section form*/
        //cy.get('.btn-primary-scheme > .ng-star-inserted').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick('.btn-primary-scheme > .ng-star-inserted')

         /*Verify the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Section successfully saved')
        commands.verifyAlert('Section successfully saved')
    }

   
   addBenefitsToCase(benefit, improvement, benefitType){
        /*Click on "Add new" button in benefit card*/
        cy.wait(7000)
        //cy.get(':nth-child(3) > .card > .card-title > .btn > .uil-plus').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(3) > .card > .card-title > .btn > .uil-plus')

        /*Search for a benefit and then add it*/
        //cy.get('.select2-selection__rendered').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick('.select2-selection__rendered')
        cy.wait(1000)
        //cy.get('input[type="search"]').should('be.visible').and('not.be.disabled').type(benefit)
        commands.validateElementAndType('input[type="search"]',benefit)
        //cy.get('.add-benefit').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick('.add-benefit')
      
        /*Fill the improvement and type */
        //cy.get('input[type="number"]').should('be.visible').and('not.be.disabled').type(improvement)
        //cy.get(':nth-child(3) > .form-control').select(benefitType) 
        commands.validateElementAndType('input[type="number"]',improvement)
        commands.validateElementAndSelect(':nth-child(3) > .form-control',benefitType)
        
        /*Submit the benefit form*/
        //cy.get('.btn-primary-scheme > .ng-star-inserted').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick('.btn-primary-scheme > .ng-star-inserted')

        /*Verify the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Benefit successfully saved')
        commands.verifyAlert('Benefit successfully saved')
    }

    caseStudiesCleanUp(){
        cy.wait(7000)
        /*Click on "..." button in testimonial card and delete the testimonial*/
        //cy.get(':nth-child(1) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-toggle > .mdi').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(1) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-toggle > .mdi')
        cy.wait(1000)
        //cy.get(':nth-child(1) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-menu > :nth-child(2)').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(1) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-menu > :nth-child(2)')

        /*Verify the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Testimonial successfully deleted')
        commands.verifyAlert('Testimonial successfully deleted')
        cy.wait(7000)


        /*Click on "..." button in section card and delete the section*/
        //cy.get(':nth-child(2) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-toggle > .mdi').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(2) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-toggle > .mdi')
        cy.wait(1000)
        //cy.get(':nth-child(2) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-menu > :nth-child(2)').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(2) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .justify-content-end > .pointer > .dropdown-menu > :nth-child(2)')
        
        /*Verify the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Section successfully deleted')
        commands.verifyAlert('Section successfully deleted')
        cy.wait(7000)
        
        /*Click on "..." button in benefit card and delete the benefit*/
        //cy.get(':nth-child(3) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .d-flex > .pointer > .dropdown-toggle > .mdi').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(3) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .d-flex > .pointer > .dropdown-toggle > .mdi')

        cy.wait(1000)
        //cy.get(':nth-child(3) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .d-flex > .pointer > .dropdown-menu > :nth-child(2)').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(3) > .card > .card-body > .table > tbody > tr.ng-star-inserted > .d-flex > .pointer > .dropdown-menu > :nth-child(2)')

        /*Verify the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Benefit successfully deleted')
        commands.verifyAlert('Benefit successfully deleted')
        cy.wait(7000)
    }

    deleteCase(){
        /*Delete the last inserted row*/
        //cy.get(':nth-child(1) > :nth-child(6) > .dropdown > .dropdown-toggle > .mdi').should('not.be.disabled').click()
        commands.validateElementAndClick(':nth-child(1) > :nth-child(6) > .dropdown > .dropdown-toggle > .mdi')
        cy.wait(1000)
        //cy.get('body:nth-child(2) div.dropdown:nth-child(12) div.dropdown-menu.show a.dropdown-item.ng-star-inserted:nth-child(2) > i.dripicons-trash.ng-star-inserted').should('be.visible').and('not.be.disabled').click()
        //cy.get('.justify-content-center > .btn-primary-scheme').should('not.be.disabled').click()
        commands.validateElementAndClick('body:nth-child(2) div.dropdown:nth-child(12) div.dropdown-menu.show a.dropdown-item.ng-star-inserted:nth-child(2) > i.dripicons-trash.ng-star-inserted')
        commands.validateElementAndClick('.justify-content-center > .btn-primary-scheme')

        /*Validate the result*/
        //cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', 'Case study was successfully deleted')
        commands.verifyAlert('Case study was successfully deleted')
    }

}

//We export it to make the class available for other classes
export default CaseStudiesPageObjects