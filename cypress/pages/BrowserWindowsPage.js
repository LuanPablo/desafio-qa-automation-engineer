
class BrowserWindowsPage {
    visit() {
        cy.visit('https://demoqa.com/browser-windows');
    }

    clickNewWindow() {
        // O stub intercepta window.open para validar a tentativa de abertura, 
        // pois o Cypress não controla múltiplas janelas nativamente.
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newWindow');
        });

        cy.get('#windowButton').click();
        cy.get('@newWindow').should('have.been.called');
    }

    verifySamplePage() {
        cy.visit('https://demoqa.com/sample');
        cy.get('h1').should('have.text', 'This is a sample page');
    }

    closeSamplePage() {
        cy.wait(2000);
        cy.go('back');
        cy.url().should('include', '/browser-windows');
    }
}

module.exports = BrowserWindowsPage;
