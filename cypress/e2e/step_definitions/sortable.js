
const {
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const SortablePage = require('../../pages/SortablePage');

const sortablePage = new SortablePage();

Given('que acesso a página Sortable', () => {
    sortablePage.visit();
});

When('organizo os itens em ordem crescente', () => {
    sortablePage.sortItemsAscending();
});

Then('os itens devem estar na ordem correta', () => {
    sortablePage.verifyItemsAscending();
});
