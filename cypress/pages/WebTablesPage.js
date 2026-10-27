class WebTablesPage {
    visit() {
        cy.visit('https://demoqa.com/webtables');
    }

    clickAdd() {
        cy.clicarElemento('#addNewRecordButton');
    }

    fillForm() {
        cy.preencherCampo('#firstName', 'Luan');
        cy.preencherCampo('#lastName', 'Pablo');
        cy.preencherCampo('#userEmail', 'luan.pablo@example.com');
        cy.preencherCampo('#age', '30');
        cy.preencherCampo('#salary', '5000');
        cy.preencherCampo('#department', 'QA');
    }

    save() {
        cy.clicarElemento('#submit');
    }

    verifyRecord() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('contain', 'Luan')
            .and('contain', 'Pablo');
    }

    editRecord() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .find('[title="Edit"]')
            .click({ force: true });

        cy.preencherCampo('#firstName', 'LuanEditado');
        cy.clicarElemento('#submit');
    }

    verifyRecordEdited() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('contain', 'LuanEditado');
    }

    deleteRecord() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .find('[title="Delete"]')
            .click({ force: true });
    }

    verifyRecordDeleted() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('not.exist');
    }
}

module.exports = WebTablesPage;
