import CommonCommands from '../CommonCommands/CommonCommands'
class TopMenuPageObjects{

     constructor() {
          globalThis.commands = new CommonCommands()
        }

    logOut(){
         cy.get('.mdi.mdi-logout.mr-1').click({force: true})
    }

    naviageToHypotheses(){
        //cy.get('#topnav-Hypotheses').click()
        commands.validateElementAndClick('#topnav-Hypotheses')
   }

   naviageToCaseStudies(){
        //cy.get("a[id='topnav-Case Studies']").click()
        commands.validateElementAndClick("a[id='topnav-Case Studies']")
   }
}

//We export it to make the class available for other classes
export default TopMenuPageObjects