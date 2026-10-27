Cypress.Commands.add('preencherCampo', (seletor, valor) => {
    cy.get(seletor)
        .should('be.visible')
        .and('be.enabled')
        .clear()
        .type(valor);
});

Cypress.Commands.add('clicarElemento', (seletor) => {
    cy.get(seletor)
        .should('be.visible')
        .and('be.enabled')
        .click();
});

Cypress.Commands.add('validarElementoVisivel', (seletor) => {
    cy.get(seletor).should('be.visible');
});

Cypress.Commands.add('validarTextoElemento', (seletor, textoEsperado) => {
    cy.get(seletor).should('contain.text', textoEsperado);
});

