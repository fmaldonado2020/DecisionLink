class ValueCasePageObjects {

     /*This include all the workflow inside the "Search Companies" Tab*/
    searchCompany(value){
        
        cy.log(value)
          /*Type in the search box, wait for the suggestion to be visible on screen then click the suggestion.*/
        cy.get('#typeahead-basic').should('not.be.disabled').type(value)
        cy.get('button[role="option"]:nth-child(1)').should('be.visible').and('not.be.disabled').click()

         /*Click on search button and then wait for the results to be displayed on screen, and click on first result*/
        cy.get('.col-md-2.col-sm-3 > .btn').should('be.visible').and('not.be.disabled').click()
        cy.get('div.entry-container > div:nth-child(1) > a').should('be.visible').and('not.be.disabled').click()
        cy.get('.ml-2 > .btn').should('be.visible').and('not.be.disabled').click()
    }

    /*This include all the workflow inside the "Define scenario" Tab*/
    defineScenario(categorySearch){
         

         /*Clean all the categories that are in the search*/
         cy.get('.select2-selection__choice__remove').each(($el, index, $list) => {
            $el.trigger('click')
         })

         /*Add a new category and verify the results*/
         cy.get('.select2-selection.select2-selection').should('not.be.disabled').type(categorySearch)
         cy.get('#category-option-0').should('be.visible').and('not.be.disabled').click()
    }
 

}

//We export it to make the class available for other classes
export default ValueCasePageObjects