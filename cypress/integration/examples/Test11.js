describe('Calendar Test', () => {
    it('Verify date selection', () => {

        const monthNumber = '6';
        const date = '15';
        const year = '2027';
        const expectedList = [monthNumber, date, year];

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

        // Open the date picker
        cy.get('.react-date-picker__inputGroup').click();

        // Select the year
        cy.get('.react-calendar__navigation__label').click().click();
        cy.contains('button', year).click();

        // Select the month
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber) - 1).click();

        // Select the date
        cy.contains('abbr', date).click();

        // Assertion: Verify the selected date is reflected in the input fields
        cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedList[index]);
        });
    });
});
