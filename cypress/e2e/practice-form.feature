
# language: pt

Funcionalidade: Preenchimento do formulário de prática

  Cenário: Preencher e enviar o formulário com sucesso
    Dado que acesso o formulário de prática
    Quando preencho os dados pessoais do formulário
    E seleciono a data de nascimento
    E seleciono a matéria e um hobby
    E envio um arquivo e preencho o endereço
    E seleciono o estado e a cidade
    E envio o formulário
    Então devo visualizar a confirmação do envio
    Quando fecho a confirmação
    Então a confirmação deve desaparecer
