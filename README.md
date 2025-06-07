
**EDUARDO FERNANDES DOS SANTOS - 2312130156**

# SEGUNDO TRABALHO TECNOLOGIA WEB USANDO REACT

Esta é uma aplicação web desenvolvida em React que permite ao usuário cadastrar, visualizar e remover itens.

## ✨ Funcionalidades

- **Cadastro de Itens:** Formulário com validação de campos para adicionar novos itens.
- **Listagem Dinâmica:** Exibição de todos os itens cadastrados, atualizada em tempo real.
- **Remoção de Itens:** Funcionalidade para excluir itens da lista.
- **Persistência de Dados:** Os dados são salvos e recuperados através de uma API REST simulada, sobrevivendo ao recarregamento da página.
- **Navegação:** Roteamento entre as páginas de "Cadastro" e "Listagem".
- **Interface Responsiva:** Layout agradável que se adapta a diferentes tamanhos de tela, construído com Material-UI.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - [React.js](https://reactjs.org/)
  - [React Router DOM](https://reactrouter.com/) (para navegação)
  - [Context API](https://reactjs.org/docs/context.html) (para gerenciamento de estado global)
  - [Material-UI (MUI)](https://mui.com/) (para componentes de UI e estilização)
  - [CSS Modules](https://github.com/css-modules/css-modules) (para estilização customizada)
  - [Axios](https://axios-http.com/) (para requisições HTTP)

- **Backend (Simulado):**
  - [json-server](https://github.com/typicode/json-server) (para criar uma API REST mock de forma rápida)

## 📋 Pré-requisitos e Instalação

Para rodar este projeto, você precisará ter algumas ferramentas instaladas em sua máquina e, em seguida, instalar as dependências do projeto.

### 1. Ferramentas Necessárias (Pré-requisitos)

Certifique-se de que você tem o **Node.js** instalado. Ele é necessário para gerenciar os pacotes e rodar os servidores.

-   **[Node.js](https://nodejs.org/en/)**: Baixe e instale a versão LTS (v18.x ou superior é recomendada).
    - O **NPM** (Node Package Manager) é instalado automaticamente junto com o Node.js.

### 2. Instalando as Dependências do Projeto

Após garantir que o Node.js está instalado, siga os passos abaixo:

1.  **Abra o terminal** e navegue até a pasta raiz do projeto:
    ```bash
    cd caminho/para/a/pasta/do/projeto
    ```

2.  **Execute o comando de instalação**:
    ```bash
    npm install
    ```
    - Este comando irá ler o arquivo `package.json` e baixar todas as dependências necessárias para o projeto, incluindo React, Material-UI, Axios e o `json-server`.

## ▶️ Como Rodar a Aplicação

Para que a aplicação funcione completamente, é necessário rodar **dois servidores** ao mesmo tempo em **dois terminais diferentes**: o servidor da API (backend) e o servidor da aplicação React (frontend).

### 1. Rodando o Servidor da API (Backend)

-   Abra um terminal na pasta raiz do projeto e execute o seguinte comando:

    ```bash
    npm run api
    ```

-   Isso iniciará o `json-server` na porta `3001`. O terminal mostrará uma mensagem de sucesso indicando que os recursos estão disponíveis em `http://localhost:3001/itens`.
-   **Deixe este terminal aberto** enquanto estiver usando a aplicação.

### 2. Rodando a Aplicação React (Frontend)

-   Abra um **novo terminal** (deixe o primeiro rodando a API).
-   Navegue até a pasta raiz do projeto novamente, se necessário.
-   Execute o seguinte comando:

    ```bash
    npm start
    ```

-   Isso iniciará o servidor de desenvolvimento do React. A aplicação será aberta automaticamente no seu navegador no endereço `http://localhost:3000`.

### Resumo

| Terminal      | Comando         | Propósito             |
|---------------|-----------------|-----------------------|
| **Terminal 1** | `npm run api`   | Inicia o backend      |
| **Terminal 2** | `npm start`     | Inicia o frontend     |

Agora você pode navegar para `http://localhost:3000` e usar a aplicação!

## 📂 Estrutura de Pastas

A estrutura de arquivos principal dentro de `src/` foi organizada da seguinte forma:

```
src/
|-- components/      # Componentes reutilizáveis (Formulário, Lista, Menu)
|-- context/         # Lógica do estado global (ItemContext)
|-- pages/           # Componentes que representam as páginas (Cadastro, Listagem)
|-- services/        # Configuração da comunicação com a API (axios)
|-- App.js           # Componente principal que gerencia as rotas
|-- index.js         # Ponto de entrada da aplicação React
