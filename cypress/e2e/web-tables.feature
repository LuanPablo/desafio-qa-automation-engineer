
# language: pt

Funcionalidade: Gerenciamento de registros na Web Tables

  Cenário: Cadastrar um novo registro
    Dado que acesso a página Web Tables
    Quando cadastro um novo registro
    Então o registro deve aparecer na tabela

  Cenário: Editar um registro existente
    Dado que acesso a página Web Tables
    E que existe um registro cadastrado na tabela
    Quando edito o registro cadastrado
    Então as alterações devem ser exibidas na tabela

  Cenário: Excluir um registro existente
    Dado que acesso a página Web Tables
    E que existe um registro cadastrado na tabela
    Quando excluo o registro cadastrado
    Então o registro não deve aparecer na tabela

  Cenário: Cadastrar e excluir 12 registros dinamicamente
    Dado que acesso a página Web Tables
    Quando cadastro 12 registros dinamicamente
    Então os 12 registros devem aparecer na tabela
    Quando excluo os 12 registros cadastrados
    Então os registros cadastrados não devem aparecer na tabela
