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
* **`Atividade 6`**: **Estilização Avançada em React:** Implementação de uma "Mini Loja" em quatro versões, explorando CSS Global, CSS Modules, Tailwind CSS e Styled-Components.
* **`ListaDeTarefas7`**: **Java: Programação Orientada a Objetos:** Uma série de 8 exercícios práticos cobrindo os pilares da POO, como Encapsulamento, Herança, Polimorfismo e Padrões de Projeto.
* `Atividade 8:` (Em breve)

## Pré-requisitos Gerais

As dependências variam conforme a tecnologia da atividade.

* **Para atividades de JavaScript/React (1 a 6):**
    * **Node.js:** Baixe em [nodejs.org](https://nodejs.org/). Verifique a instalação com `node -v`.
    * **NPM:** Instalado com o Node.js. Verifique com `npm -v`.
* **Para atividades de Java (7 em diante):**
    * **JDK (Java Development Kit):** Versão 17 ou superior. Baixe em [adoptium.net](https://adoptium.net/). Verifique com `java -version`.

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

### **Atividades com React (5 em diante)**

#### Atividade 5 (movie-app)

1.  **Navegue até a Pasta da Aplicação:**
    ```bash
    cd Atividade5/movie-app
    ```
2.  **Instale as Dependências:**
    ```bash
    npm install
    ```
3.  **Configure a Chave de API:** Crie um arquivo `.env` na pasta `movie-app` e adicione sua chave da API do TMDB: `REACT_APP_TMDB_API_KEY=SUA_CHAVE_AQUI`.
4.  **Inicie a Aplicação:**
    ```bash
    npm start
    ```

#### Atividade 6 (mini-loja)

Esta atividade utiliza **Vite** e contém 4 implementações diferentes.

1.  **Navegue até a Pasta da Aplicação:**
    ```bash
    cd Atividade6
    ```
2.  **Instale as Dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  **Como Testar as 4 Versões:**
    * Abra o arquivo `Atividade6/src/main.jsx`.
    * Você encontrará 4 linhas de `import`, uma para cada versão de estilo.
    * **Descomente a linha** da versão que deseja visualizar (CSS Global, CSS Modules, Tailwind ou Styled-Components) e certifique-se de que as outras 3 estejam comentadas.
    * Salve o arquivo, e o navegador será atualizado automaticamente.

#### Atividade 7 (Java e POO)

1.  **Navegue até a Pasta da Atividade:**
    ```bash
    cd Atividade7
    ```
2.  **Compile os Arquivos:**
    Este comando cria um diretório `out` com os arquivos compilados.
    ```bash
    javac -d out src/main/java/br/com/codifica/prati/tarefa7/ex*/*.java
    ```
3.  **Execute um Exercício Específico:**
    Use o classpath (`-cp`) para indicar onde estão os arquivos compilados.
    ```bash
    # Exemplo para rodar o exercício 1
    java -cp out br.com.codifica.prati.tarefa7.ex1.MainEx1
    ```
    *Altere o final do comando (`ex1.MainEx1`) para executar os outros exercícios.*

## Contato

* **Dahlin Pereira**
* **LinkedIn:** [dahlinpereira](https://www.linkedin.com/in/dahlinpereira)
* **GitHub:** [dahlinpereira](https://www.github.com/dahlinpereira)