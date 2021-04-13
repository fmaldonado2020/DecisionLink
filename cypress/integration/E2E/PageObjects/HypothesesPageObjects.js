class HypothesesPageObjects {

    addNewHypotheses(){
        cy.get('.uil-plus').should('be.visible').and('not.be.disabled').click()
    }
}

//We export it to make the class available for other classes
export default HypothesesPageObjects