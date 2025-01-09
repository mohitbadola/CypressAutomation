import ConfirmationPage from "./ConfirmationPage";

class CartPage{

    sumLessThanLimit(){
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each($el=>{
            const amount = Number($el.text().split(" ")[1].trim());
            sum = sum + amount;
        }).then(()=>{
            expect(sum).to.be.lessThan(200000);
        })
    }

    checkOut(){
        cy.contains('button', 'Checkout').click();
        return new ConfirmationPage;
    }
}

export default CartPage;