
const {
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const BrowserWindowsPage = require('../../pages/BrowserWindowsPage');

const browserWindows = new BrowserWindowsPage();

Given('que acesso a página Browser Windows', () => {
    browserWindows.visit();
});

When('solicito a abertura de uma nova janela', () => {
    browserWindows.clickNewWindow();
});

Then('a abertura da janela deve ser solicitada', () => {
    cy.get('@newWindow').should('have.been.called');
});

Then('devo visualizar a mensagem da página de exemplo', () => {
    browserWindows.verifySamplePage();
});

When('retorno à página Browser Windows', () => {
    browserWindows.closeSamplePage();
});

Then('devo estar novamente na página Browser Windows', () => {
    cy.url().should('include', '/browser-windows');
});
