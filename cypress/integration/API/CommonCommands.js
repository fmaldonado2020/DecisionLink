class CommonCommands{

    customRequest(url){
        return cy.request("https://www.breakingbadapi.com/api/characters").then((response) => {
            expect(response.status).to.eq(200)})
    }
}

//We export it to make the class available for other classes
export default CommonCommands