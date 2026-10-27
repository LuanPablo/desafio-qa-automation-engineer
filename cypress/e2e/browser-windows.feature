
# language: pt

Funcionalidade: Gerenciamento de janelas do navegador

  Cenário: Solicitar a abertura e validar a página de exemplo
    Dado que acesso a página Browser Windows
    Quando solicito a abertura de uma nova janela
    Então a abertura da janela deve ser solicitada
    E devo visualizar a mensagem da página de exemplo
    Quando retorno à página Browser Windows
    Então devo estar novamente na página Browser Windows
