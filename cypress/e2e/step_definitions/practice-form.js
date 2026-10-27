
const {
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const PracticeFormPage = require('../../pages/PracticeFormPage');

const practiceForm = new PracticeFormPage();

Given('que acesso o formulário de prática', () => {
    practiceForm.visit();
});

When('preencho os dados pessoais do formulário', () => {
    practiceForm.fillFirstName('Luan');
    practiceForm.fillLastName('Pablo');
    practiceForm.fillEmail('luan.pablo@example.com');
    practiceForm.selectGender('Male');
    practiceForm.fillMobile('1198765432');
});

When('seleciono a data de nascimento', () => {
    practiceForm.selectDateOfBirth();
});

When('seleciono a matéria e um hobby', () => {
    practiceForm.fillSubject('Maths');
    practiceForm.selectHobby('Sports');
});

When('envio um arquivo e preencho o endereço', () => {
    practiceForm.uploadFile('upload.txt');
    practiceForm.fillAddress('Rua de Teste, 123');
});

When('seleciono o estado e a cidade', () => {
    practiceForm.selectStateAndCity('NCR', 'Delhi');
});

When('envio o formulário', () => {
    // Registra o tratamento antes da ação que pode provocar a exceção
    cy.on('uncaught:exception', (err) => {
        if (err.message.includes('findDOMNode is not a function')) {
            return false;
        }
    });

    practiceForm.submit();
});

Then('devo visualizar a confirmação do envio', () => {
    practiceForm.verifyConfirmationModal();
});

When('fecho a confirmação', () => {
    practiceForm.closeModal();
});

Then('a confirmação deve desaparecer', () => {
    cy.get('.modal-content').should('not.exist');
});
