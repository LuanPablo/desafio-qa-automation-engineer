
const BrowserWindowsPage = require('../pages/BrowserWindowsPage');

describe('Browser Windows - Desafio Accenture', () => {
  const browserWindows = new BrowserWindowsPage();

  it('Deve abrir, validar e retornar da página de exemplo', () => {
    browserWindows.visit();
    browserWindows.clickNewWindow();
    browserWindows.verifySamplePage();
    browserWindows.closeSamplePage();
  });
});
