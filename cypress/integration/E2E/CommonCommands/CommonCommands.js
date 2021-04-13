class CommonCommands {

    closeNotification(){
        /*Close any type of notification*/
        cy.get('.uil-plus').should('be.visible').and('not.be.disabled').click()
    }

    validateElementAndType(locator, value){
        /*Find and validate the availability of elements*/
        cy.get(locator).should('be.visible').and('not.be.disabled').type(value)
    }

    validateElementAndClick(locator){
        /*Find and validate the availability of elements*/
        cy.get(locator).should('be.visible').and('not.be.disabled').click()
    }

    validateElementAndSelect(locator, value){
        cy.get(locator).select(value) 
    }

    verifyAlert(message){
        cy.get('.alert').should('be.visible').and('not.be.disabled').and('contain.text', message)
    }
}

//We export it to make the class available for other classes
export default CommonCommands