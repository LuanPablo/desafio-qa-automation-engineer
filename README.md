
# Desafio QA Automation Engineer — Accenture

Projeto de automação de testes desenvolvido como parte do desafio técnico para a posição de QA Automation Engineer.

O objetivo é demonstrar a aplicação de testes automatizados de interface (UI) e API, utilizando boas práticas de organização, reutilização de código e execução contínua.

## Tecnologias utilizadas

- **JavaScript** — linguagem utilizada nos testes.
- **Cypress** — automação de testes de interface e API.
- **Cucumber / Gherkin** — especificação dos cenários de UI em BDD.
- **Page Object Model (POM)** — organização das ações e responsabilidades das páginas.
- **Git e GitHub** — versionamento do código.
- **GitHub Actions** — execução automatizada dos testes por CI.

## Estrutura do projeto

```text
desafio-tecnico-accenture/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── api/
│   │   └── api-bookstore.cy.js
│   ├── e2e/
│   │   ├── step_definitions/
│   │   ├── practice-form.feature
│   │   ├── browser-windows.feature
│   │   ├── web-tables.feature
│   │   ├── progress-bar.feature
│   │   └── sortable.feature
│   ├── fixtures/
│   ├── pages/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .cypress-cucumber-preprocessorrc.json
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Pré-requisitos

- Node.js
- npm
- Git

## Instalação

Clone o repositório:

```bash
git clone https://github.com/LuanPablo/desafio-qa-automation-engineer.git
```

Acesse a pasta do projeto:

```bash
cd desafio-qa-automation-engineer
```

Instale as dependências:

```bash
npm install
```

## Execução dos testes

### Executar toda a suíte

Executa os testes configurados no Cypress em modo headless:

```bash
npm test
```

### Executar os testes de API

Executa o teste do fluxo Bookstore:

```bash
npm run test:api
```

### Abrir a interface do Cypress

```bash
npm run cy:open
```

### Executar um cenário específico

Exemplo de execução do cenário Sortable:

```bash
npx cypress run --spec "cypress/e2e/sortable.feature"
```

O caminho pode ser alterado para executar outro arquivo `.feature` ou teste compatível com a configuração do Cypress.

## Cenários automatizados

### Testes de API

Os testes de API cobrem etapas do fluxo Bookstore, incluindo:

- Criação de usuário.
- Geração e validação de token de autenticação.
- Verificação de autorização.
- Consulta de livros disponíveis.
- Seleção e reserva de livros.
- Consulta dos dados do usuário e validação dos livros associados.

As verificações incluem códigos de resposta e validações dos dados retornados pela API.

### Testes de interface (UI)

Os cenários de interface utilizam Cypress e Cucumber para descrever e executar os comportamentos testados.

- **Practice Form:** preenchimento, envio e validação do formulário.
- **Browser Windows:** validação do fluxo de navegação para a página de exemplo.
- **Web Tables:** cadastro, edição e exclusão de registros.
- **Progress Bar:** interação com a barra de progresso e validação de seu estado.
- **Sortable:** interação com os itens e validação da ordem apresentada.

## Organização e boas práticas

### Page Object Model

O projeto utiliza Page Objects para centralizar ações e seletores relacionados às páginas testadas.

Essa abordagem ajuda a separar a implementação das interações dos passos descritos nos cenários, facilitando a manutenção e a reutilização de código.

### BDD com Cucumber

Os cenários de UI são escritos em Gherkin, utilizando a estrutura:

- **Dado (Given):** contexto inicial do cenário.
- **Quando (When):** ação executada.
- **Então (Then):** resultado esperado.

As definições dos passos ficam organizadas no diretório `cypress/e2e/step_definitions/`.

### Comandos personalizados do Cypress

Os comandos reutilizáveis estão definidos em `cypress/support/commands.js` e são carregados por `cypress/support/e2e.js`.

| Comando | Finalidade |
|---|---|
| `cy.validarElementoVisivel(seletor)` | Valida se um elemento está visível. |
| `cy.validarTextoElemento(seletor, textoEsperado)` | Valida se um elemento contém o texto esperado. |
| `cy.clicarElemento(seletor)` | Verifica se um elemento está visível e habilitado antes de clicar. |

Esses comandos permitem padronizar ações recorrentes e reduzir a repetição de verificações nos testes.

## Integração contínua (CI)

O projeto possui um workflow do GitHub Actions em `.github/workflows/cypress.yml` para executar os testes automatizados.

A integração contínua ajuda a verificar se a suíte continua funcionando após alterações no código.

## Considerações finais

Este projeto demonstra a aplicação de automação de testes de UI e API, organização com Page Objects, especificação de cenários em BDD, criação de comandos personalizados e integração contínua.

O foco é contribuir para a qualidade do software por meio de testes organizados, reutilizáveis e executáveis de forma automatizada.

---

Projeto desenvolvido para fins de avaliação técnica em QA Automation.
