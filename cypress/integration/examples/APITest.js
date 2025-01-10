describe('My API Test Suite', ()=>{
    it('Test to handle API call', ()=>{
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium Automation with java mock",
            "isbn":"bcdsss",
            "aisle":"22s7",
            "author":"KauKau Negi"
        }).then(function(Response){
            expect(Response.body).to.have.property("Msg", "successfully added")
            expect(Response.status).to.eq(200)
        })

    })
})