
const PracticeFormPage = require('../pages/PracticeFormPage');

describe('Practice Form - Desafio Accenture', () => {
    const practiceForm = new PracticeFormPage();

    it('Deve preencher e enviar o formulário com sucesso', () => {
        practiceForm.visit();

        practiceForm.fillFirstName('Luan');
        practiceForm.fillLastName('Pablo');
        practiceForm.fillEmail('luan.pablo@example.com');
        practiceForm.selectGender('Male');
        practiceForm.fillMobile('1198765432');
        practiceForm.selectDateOfBirth();
        practiceForm.fillSubject('Maths');
        practiceForm.selectHobby('Sports');
        practiceForm.uploadFile('upload.txt');
        practiceForm.fillAddress('Rua de Teste, 123');
        practiceForm.selectStateAndCity('NCR', 'Delhi');

        practiceForm.submit();
        practiceForm.verifyConfirmationModal();
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('findDOMNode is not a function')) {
                return false;
            }
        });
        practiceForm.closeModal();
    });
});
