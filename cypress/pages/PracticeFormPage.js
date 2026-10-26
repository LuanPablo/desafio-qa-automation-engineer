class PracticeFormPage {
    visit() {
        cy.visit('https://demoqa.com/automation-practice-form');
    }

    fillFirstName(value) {
        cy.get('#firstName').type(value);
    }

    fillLastName(value) {
        cy.get('#lastName').type(value);
    }

    fillEmail(value) {
        cy.get('#userEmail').type(value);
    }

    selectGender(gender) {
        cy.contains('label', gender).click();
    }

    fillMobile(value) {
        cy.get('#userNumber').type(value);
    }

    selectDateOfBirth() {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1998');
        cy.get('.react-datepicker__month-select').select('May');
        cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();
    }

    fillSubject(value) {
        cy.get('#subjectsInput').type(value);
        cy.get('.subjects-auto-complete__menu').contains(value).click();
    }

    selectHobby(hobby) {
        cy.contains('label', hobby).click();
    }

    uploadFile(fileName) {
        cy.get('#uploadPicture').selectFile(`cypress/fixtures/${fileName}`);
    }

    fillAddress(value) {
        cy.get('#currentAddress').type(value);
    }

    selectStateAndCity(state, city) {

        cy.get('#state').click();
        cy.get('#state').find('[class*="-option"]').contains(state).click();

        cy.get('#city').click();
        cy.get('#city').find('[class*="-option"]').contains(city).click();

    }

    submit() {
        cy.get('#submit').click();
    }

    verifyConfirmationModal() {
        cy.get('.modal-content').should('be.visible');
        cy.contains('Thanks for submitting the form').should('be.visible');
    }

    closeModal() {
        cy.wait(2000);
        cy.get('body').type('{esc}');
        cy.get('.modal-content').should('not.exist');
    }
}

module.exports = PracticeFormPage;