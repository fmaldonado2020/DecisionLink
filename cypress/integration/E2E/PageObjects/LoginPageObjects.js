import CommonCommands from '../CommonCommands/CommonCommands'

class LoginPageObjects{

    constructor() { 
        globalThis.commands = new CommonCommands()
      }

    typeInEmailTextBox(value){
         //cy.get('#email').should('be.visible').and('not.be.disabled').type(value)
         commands.validateElementAndType('#email',value)
    }

    typeInPasswordTextBox(value){
        //cy.get('#password').should('be.visible').and('not.be.disabled').type(value)
        commands.validateElementAndType('#password',value)
   }

    clickLogInButton(){
        //cy.get('.btn').should('be.visible').and('not.be.disabled').click()
        commands.validateElementAndClick('.btn')
    }
}

//We export it to make the class available for other classes
export default LoginPageObjects