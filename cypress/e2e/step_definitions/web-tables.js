
const {
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const WebTablesPage = require('../../pages/WebTablesPage');

const webTables = new WebTablesPage();

// Acesso à página
Given('que acesso a página Web Tables', () => {
    webTables.visit();
});

// Preparação de registro para edição e exclusão
Given('que existe um registro cadastrado na tabela', () => {
    webTables.clickAdd();
    webTables.fillForm();
    webTables.save();
    webTables.verifyRecord();
});

// Cadastro
When('cadastro um novo registro', () => {
    webTables.clickAdd();
    webTables.fillForm();
    webTables.save();
});

Then('o registro deve aparecer na tabela', () => {
    webTables.verifyRecord();
});

// Edição
When('edito o registro cadastrado', () => {
    webTables.editRecord();
});

Then('as alterações devem ser exibidas na tabela', () => {
    webTables.verifyRecordEdited();
});

// Exclusão
When('excluo o registro cadastrado', () => {
    webTables.deleteRecord();
});

Then('o registro não deve aparecer na tabela', () => {
    webTables.verifyRecordDeleted();
});
