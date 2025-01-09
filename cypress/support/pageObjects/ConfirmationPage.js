class ConfirmationPage{

    submitFormDetails(){
        cy.submitFormDetails();
        // cy.get('#country').type("India");
        // cy.get('.suggestions ul li a', { timeout: 10000 }).click();
        // cy.contains('input', 'Purchase').click();
    }

    getAlertMessage(){
        cy.get('.alert').should('contain', 'Success');
    }

}
export default ConfirmationPage;