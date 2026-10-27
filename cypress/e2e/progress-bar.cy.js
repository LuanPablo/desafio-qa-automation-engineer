
const ProgressBarPage = require('../pages/ProgressBarPage');

describe('Progress Bar', () => {
    const progressBar = new ProgressBarPage();

    beforeEach(() => {
        progressBar.visit();
    });

    it('deve parar até 25%, chegar a 100% e resetar', () => {
        // Inicia a barra
        progressBar.start();

        // Para e valida o limite de 25%
        progressBar.stopBefore25();
        progressBar.verifyProgressAtMost25();

        // Inicia novamente e aguarda 100%
        progressBar.start();
        progressBar.waitUntil100();

        // Reseta para finalizar o desafio
        progressBar.reset();
    });
});
