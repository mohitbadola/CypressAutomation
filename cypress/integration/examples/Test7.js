describe('Test suite', () => {
    it('test web tables', ()=>{
  
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{

        const text = $el.text()
        if(text.includes('Python')){
            // cy.log(text)
            // cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            //   const priceText = price.text()
            //   expect(priceText).equal('25')
            // })
            
            cy.get('tr td:nth-child(2)').eq(index).next().should('have.text', '25');
        }

        })

    })
  })