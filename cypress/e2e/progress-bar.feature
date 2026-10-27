
# language: pt

Funcionalidade: Controle da barra de progresso

  Cenário: Parar antes de 25%, completar e resetar a barra
    Dado que acesso a página Progress Bar
    Quando inicio a barra de progresso
    E paro a barra antes ou em 25%
    Então o progresso deve ser menor ou igual a 25%
    Quando inicio a barra novamente
    E aguardo a conclusão do progresso
    Então o progresso deve chegar a 100%
    Quando reseto a barra de progresso
