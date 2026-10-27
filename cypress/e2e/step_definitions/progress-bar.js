
const {
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const ProgressBarPage = require('../../pages/ProgressBarPage');

const progressBar = new ProgressBarPage();

Given('que acesso a página Progress Bar', () => {
    progressBar.visit();
});

When('inicio a barra de progresso', () => {
    progressBar.start();
});

When('paro a barra antes ou em 25%', () => {
    progressBar.stopBefore25();
});

Then('o progresso deve ser menor ou igual a 25%', () => {
    progressBar.verifyProgressAtMost25();
});

When('aguardo a conclusão do progresso', () => {
    progressBar.waitUntil100();
});

Then('o progresso deve chegar a 100%', () => {
    progressBar.waitUntil100();
});

When('reseto a barra de progresso', () => {
    progressBar.reset();
});

When('inicio a barra novamente', () => {
    progressBar.start();
});

