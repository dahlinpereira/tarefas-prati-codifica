# Lista de Exercícios - Trilha Dev. Full Stack Jr. 2025

Bem-vindo ao meu repositório de atividades da Trilha de Formação Dev. Full Stack Jr. 2025. Este espaço documenta minha jornada de aprendizado, contendo as resoluções para todas as 8 atividades obrigatórias do curso.

Cada atividade está organizada em sua própria pasta, com um `README.md` específico detalhando seus objetivos e as instruções para execução.

## Estrutura do Repositório e Atividades

Navegue pelas pastas abaixo para explorar cada atividade.

  * **`Atividade 1`**: Estruturas Básicas de JS: Foco em variáveis, tipos de dados, operadores e estruturas de controle.
  * **`Atividade 2`**: Conceitos Intermediários em JS: Foco em funções, recursão, manipulação de arrays e objetos.
  * **`Atividade 3`**: Desenvolvimento Web Básico: Criação de páginas web estáticas com HTML5 semântico e CSS3.
  * **`Atividade 4`**: Página de Perfil Pessoal: Desenvolvimento de uma página de portfólio responsiva.
  * **`Atividade 5`**: **Consumo de API com ReactJS:** Uma aplicação interativa que consome a API do TMDB para buscar filmes, exibir detalhes e criar uma lista de favoritos.
  * `Atividade 6:` (Em breve)
  * `Atividade 7:` (Em breve)
  * `Atividade 8:` (Em breve)

## Pré-requisitos Gerais

Para executar todas as atividades, certifique-se de ter o **Node.js** e o **NPM** instalados.

  * **Node.js:** Baixe em [nodejs.org](https://nodejs.org/). Verifique a instalação com `node -v`.
  * **NPM:** Instalado com o Node.js. Verifique com `npm -v`.

-----

## Configuração e Execução dos Projetos

As instruções variam dependendo do tipo de atividade.

### **Atividades 1 a 4 (JavaScript Básico e HTML/CSS)**

Para os exercícios iniciais baseados em scripts JavaScript e páginas estáticas:

1.  **Clone o Repositório (se ainda não o fez)**:
    ```bash
    git clone https://github.com/dahlinpereira/tarefas-prati-codifica.git
    ```
2.  **Acesse a Pasta Raiz**:
    ```bash
    cd tarefas-prati-codifica
    ```
3.  **Instale as Dependências (para os scripts JS)**:
    Este comando instalará bibliotecas como `prompt-sync`.
    ```bash
    npm install
    ```
4.  **Para executar os scripts `.js`**, navegue até a pasta da atividade (ex: `cd Atividade1`) e execute o arquivo com o Node:
    ```bash
    node nome_do_arquivo.js
    ```
5.  **Para visualizar as páginas `.html`**, basta abrir o arquivo diretamente no seu navegador.

### **Atividades 5 em diante (Aplicações React)**

Para executar a aplicação da Atividade 5 e futuras:

1.  **Navegue até a Pasta da Aplicação:** A partir da raiz do repositório, entre no diretório do projeto:

    ```bash
    cd Atividade5/movie-app
    ```

2.  **Instale as Dependências do Projeto:** Cada aplicação React tem seu próprio conjunto de dependências.

    ```bash
    npm install
    ```

3.  **Configure a Chave de API (Passo Essencial):**

      * É necessário ter uma conta no site do TMDB e uma API ativa.
      * Crie um arquivo chamado `.env` dentro da pasta `movie-app`.
      * Adicione sua chave da API do TMDB neste formato: `REACT_APP_TMDB_API_KEY=SUA_CHAVE_AQUI`.
      * *Para mais detalhes, consulte o README.md dentro da pasta da atividade.*

4.  **Inicie a Aplicação:**

    ```bash
    npm start
    ```

    O projeto será aberto em seu navegador no endereço `http://localhost:3000`.

## Contato

  * **Dahlin Pereira**
  * **LinkedIn:** [dahlinpereira](https://www.linkedin.com/in/dahlinpereira)
  * **GitHub:** [dahlinpereira](https://www.github.com/dahlinpereira)
