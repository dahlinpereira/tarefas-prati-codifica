# Atividade 5 - Consumo de API com ReactJS (+praTI)

Este projeto é uma aplicação web desenvolvida em React como parte da Tarefa Obrigatória 5 do programa **+praTI**. A aplicação consome a API do The Movie Database (TMDB) para permitir que usuários busquem filmes, visualizem informações detalhadas e gerenciem uma lista de favoritos pessoal.

## ✨ Funcionalidades Principais

  * **Busca de Filmes:** Campo de busca para pesquisar filmes por título em tempo real.
  * **Listagem de Resultados:** Exibição dos resultados em cards, mostrando pôster, título e ano de lançamento.
  * **Paginação:** Navegação entre as diferentes páginas de resultados da busca.
  * **Página de Detalhes:** Visualização completa de informações de um filme, incluindo sinopse, avaliação, diretor e elenco principal.
  * **Lista de Favoritos:** Funcionalidade para adicionar ou remover filmes de uma lista de favoritos, que persiste localmente no navegador do usuário (`localStorage`).
  * **Feedback Visual:** Indicadores de carregamento (`loading`) durante as requisições à API e mensagens claras em caso de erro ou resultados não encontrados.

## 🛠️ Tecnologias Utilizadas

  * **React.js:** Biblioteca principal para a construção da interface de usuário.
  * **React Router DOM:** Para gerenciamento de rotas e navegação entre as páginas.
  * **Axios:** Para realizar as requisições HTTP à API do TMDB.
  * **CSS:** Para estilização dos componentes e da aplicação de forma geral.

-----

## 🚀 Como Executar e Testar o Projeto

Estas são as instruções para que um visitante ou avaliador possa clonar, configurar e testar a aplicação em seu ambiente local.

### **Pré-requisitos**

Antes de começar, certifique-se de que você tem o **Node.js** e o **npm** (ou Yarn) instalados em sua máquina.

### **Passo 1: Clonar o Repositório**

Primeiro, clone o repositório principal que contém todas as tarefas:

```bash
git clone https://github.com/dahlinpereira/tarefas-prati-codifica.git
```

### **Passo 2: Navegar até a Pasta do Projeto**

Após clonar, entre na pasta específica desta atividade:

```bash
cd tarefas-prati-codifica/TarefaObrigatoria5/movie-app
```

### **Passo 3: Instalar as Dependências**

Execute o comando abaixo para instalar todas as dependências necessárias, como React, Axios, etc.

```bash
npm install
```

### **Passo 4: Configurar a Chave da API (Passo Essencial)**

Para que a aplicação possa se comunicar com o TMDB, uma chave de API é necessária.

1.  Crie uma conta no [The Movie Database (TMDB)](https://www.themoviedb.org/signup) e gere sua chave de API gratuita.

2.  Na raiz do projeto (`movie-app`), crie um arquivo chamado `.env`.

3.  Dentro do arquivo `.env`, adicione a seguinte linha, substituindo `SUA_CHAVE_AQUI` pela chave que você obteve:

    ```
    REACT_APP_TMDB_API_KEY=SUA_CHAVE_AQUI
    ```

**Importante:** Sem este passo, a aplicação não conseguirá buscar os filmes e exibirá um erro.

### **Passo 5: Iniciar a Aplicação**

Com tudo configurado, inicie o servidor de desenvolvimento local:

```bash
npm start
```

A aplicação será aberta automaticamente em seu navegador no endereço `http://localhost:3000`.

### **Roteiro de Testes Sugerido**

Para uma avaliação completa, siga os seguintes passos na aplicação:

1.  **Buscar um filme:** Utilize a barra de busca para procurar por um filme (ex: "Matrix"). Verifique se os resultados são exibidos.
2.  **Navegar pela paginação:** Busque por um termo genérico (ex: "love") e utilize os botões "Próxima" e "Anterior".
3.  **Ver detalhes:** Clique no botão "Ver Detalhes" de um dos filmes. A página de detalhes com informações completas deve ser carregada.
4.  **Adicionar um favorito:** Na página de detalhes, clique em "Adicionar aos Favoritos".
5.  **Verificar a lista de favoritos:** Clique no link "Meus Favoritos" no menu de navegação. O filme adicionado deve estar lá.
6.  **Remover um favorito:** Volte à página de detalhes do filme favoritado (o botão agora deve dizer "Remover dos Favoritos") e clique nele. Verifique se o filme foi removido da página "Meus Favoritos".
7.  **Testar persistência:** Adicione um filme aos favoritos e atualize a página do navegador (F5). O filme deve permanecer na lista, confirmando o uso do `localStorage`.