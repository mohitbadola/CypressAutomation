class ConfirmationPage{

    submitFormDetails(){
        cy.submitFormDetails();
        // cy.get('#country').type("India");
        // cy.get('.suggestions ul li a', { timeout: 10000 }).click();
        // cy.contains('input', 'Purchase').click();
    }

    getAlertMessage(){
       return cy.get('.alert');
    }

}
export default ConfirmationPage;