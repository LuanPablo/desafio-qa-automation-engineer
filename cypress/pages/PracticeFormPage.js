class PracticeFormPage {
    visit() {
        cy.visit('https://demoqa.com/automation-practice-form');
    }

    fillFirstName(value) {
        cy.preencherCampo('#firstName', value);
    }

    fillLastName(value) {
        cy.preencherCampo('#lastName', value);
    }

    fillEmail(value) {
        cy.preencherCampo('#userEmail', value);
    }

    selectGender(gender) {
        cy.contains('label', gender).click();
    }

    fillMobile(value) {
        cy.preencherCampo('#userNumber', value);
    }

    selectDateOfBirth() {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1998');
        cy.get('.react-datepicker__month-select').select('May');
        cy.get(
            '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
        ).click();
    }

    fillSubject(value) {
        cy.get('#subjectsInput').type(value);
        cy.get('.subjects-auto-complete__menu')
            .contains(value)
            .click();
    }

    selectHobby(hobby) {
        cy.contains('label', hobby).click();
    }

    uploadFile(fileName) {
        cy.get('#uploadPicture')
            .selectFile(`cypress/fixtures/${fileName}`);
    }

    fillAddress(value) {
        cy.preencherCampo('#currentAddress', value);
    }

    selectStateAndCity(state, city) {
        cy.get('#state').click();
        cy.get('#state')
            .find('[class*="-option"]')
            .contains(state)
            .click();

        cy.get('#city').click();
        cy.get('#city')
            .find('[class*="-option"]')
            .contains(city)
            .click();
    }

    submit() {
        cy.clicarElemento('#submit');
    }

    verifyConfirmationModal() {
        cy.validarElementoVisivel('.modal-content');
        cy.validarTextoElemento(
            '.modal-content',
            'Thanks for submitting the form'
        );
    }

    closeModal() {
        cy.wait(2000);
        cy.get('body').type('{esc}');
        cy.get('.modal-content').should('not.exist');
    }
}

module.exports = PracticeFormPage;
