
class WebTablesPage {
    visit() {
        cy.visit('https://demoqa.com/webtables');
    }

    clickAdd() {
        cy.get('#addNewRecordButton').click();
    }

    fillForm() {
        cy.get('#firstName').type('Luan');
        cy.get('#lastName').type('Pablo');
        cy.get('#userEmail').type('luan.pablo@example.com');
        cy.get('#age').type('30');
        cy.get('#salary').type('5000');
        cy.get('#department').type('QA');
    }

    save() {
        cy.get('#submit').click();
    }

    verifyRecord() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('contain', 'Luan')
            .and('contain', 'Pablo');
    }

    editRecord() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('contain', 'Luan')
            .and('contain', 'Pablo')
            .find('[title="Edit"]')
            .click({ force: true });

        cy.get('#firstName').clear().type('LuanEditado');
        cy.get('#submit').click();
    }

    verifyRecordEdited() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('contain', 'LuanEditado');
    }

    deleteRecord() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('contain', 'Luan')
            .and('contain', 'Pablo')
            .find('[title="Delete"]')
            .click({ force: true });
    }

    verifyRecordDeleted() {
        cy.contains('tbody tr', 'luan.pablo@example.com')
            .should('not.exist');
    }
}

module.exports = WebTablesPage;
