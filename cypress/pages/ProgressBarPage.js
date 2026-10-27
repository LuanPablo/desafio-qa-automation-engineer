
class ProgressBarPage {
    visit() {
        cy.visit('https://demoqa.com/');
        cy.get('.category-cards')
            .contains('Widgets')
            .click();

        cy.contains('.element-list .menu-list li', 'Progress Bar')
            .click();
    }

    start() {
        cy.get('#startStopButton').click();
    }

    stopBefore25() {
        // Aguarda a barra chegar a 20% e então para
        cy.get('#progressBar .progress-bar', { timeout: 30000 })
            .should(($bar) => {
                const value = Number($bar.attr('aria-valuenow'));
                expect(value).to.be.at.least(20);
                expect(value).to.be.at.most(25);
            });

        cy.get('#startStopButton').click();
        cy.get('#startStopButton').should('have.text', 'Start');
    }

    verifyProgressAtMost25() {
        cy.get('#progressBar .progress-bar')
            .invoke('attr', 'aria-valuenow')
            .then(Number)
            .should('be.at.most', 25);
    }

    waitUntil100() {
        cy.get('#progressBar .progress-bar', { timeout: 30000 })
            .should(($bar) => {
                expect(Number($bar.attr('aria-valuenow'))).to.equal(100);
            });
    }

    reset() {
        cy.get('#resetButton', { timeout: 10000 })
            .should('be.visible')
            .click();
    }
}

module.exports = ProgressBarPage;
