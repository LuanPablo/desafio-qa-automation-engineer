# Desafio QA Automation Engineer — Accenture

Projeto de automação de testes desenvolvido como parte do desafio técnico para a posição de QA Automation Engineer.

## Tecnologias utilizadas

- **JavaScript**
- **Cypress** — automação de testes de UI e API
- **Cucumber / Gherkin** — especificação de cenários em BDD
- **Page Object Model (POM)** — organização e reutilização de ações e seletores
- **GitHub Actions** — execução automatizada via CI

## Estrutura do projeto

```text
cypress/
├── api/                  # Testes de API
├── e2e/                  # Cenários de teste de UI
│   └── step_definitions/ # Implementação dos passos BDD
├── fixtures/             # Arquivos utilizados nos testes
├── pages/                # Page Objects
└── support/              # Configurações e comandos do Cypress
```

## Pré-requisitos

- Node.js
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/LuanPablo/desafio-qa-automation-engineer.git
cd desafio-qa-automation-engineer
npm install
```

## Execução dos testes

Executar todos os testes em modo headless:

```bash
npx cypress run
```

Abrir a interface do Cypress:

```bash
npx cypress open
```

Executar os testes de API:

```bash
npm run test:api
```

Executar um cenário específico de UI:

```bash
npx cypress run --spec "cypress/e2e/sortable.feature"
```

## Cenários automatizados

### API

- Criação de usuário.
- Geração e validação de token de autenticação.
- Verificação de autorização.
- Consulta e reserva de livros.
- Consulta dos dados do usuário.

### Interface (UI)

- **Practice Form:** preenchimento, envio e validação do formulário.
- **Browser Windows:** verificação da abertura da página de exemplo.
- **Web Tables:** cadastro, edição e exclusão de registros com BDD.
- **Progress Bar:** controle e validação do progresso.
- **Sortable:** validação da ordem dos itens.

## Organização e boas práticas

O projeto utiliza Page Objects para separar as ações de página dos cenários de teste e Cucumber para descrever os fluxos de UI em linguagem Gherkin.

## CI

O projeto possui um workflow do GitHub Actions para executar os testes automatizados.

---

Projeto desenvolvido para fins de avaliação técnica em QA Automation.
