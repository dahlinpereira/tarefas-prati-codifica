# Atividade 6 - Estilização em React "Mini Loja"

Este projeto é a resolução da Atividade 6 da trilha de formação Dev. Full Stack Jr. O objetivo principal foi explorar e comparar quatro abordagens de estilização populares no ecossistema React, implementando a mesma interface de uma "Mini Loja" em cada uma delas.

A aplicação inclui funcionalidades como um grid de produtos responsivo, cards de produtos com múltiplos estados (hover, focus, disabled), um seletor de tema (claro/escuro) com persistência e skeletons de carregamento para simular uma experiência de usuário assíncrona.

## Abordagens Implementadas

A interface foi construída em quatro versões distintas, cada uma em sua própria pasta e utilizando exclusivamente a técnica designada:

1.  **CSS Global:** Utiliza uma única folha de estilos (`styles.css`) com variáveis CSS para theming e uma nomenclatura BEM-like.
2.  **CSS Modules:** Isola os estilos por componente, onde cada um tem seu próprio arquivo `.module.css` para evitar conflitos de classes.
3.  **Tailwind CSS:** Uma abordagem "utility-first", onde a estilização é composta diretamente no JSX através de classes utilitárias.
4.  **Styled-Components:** Uma biblioteca CSS-in-JS que permite escrever CSS dentro dos arquivos de componente React, criando componentes com estilos encapsulados e dinâmicos.

## Como Executar e Testar o Projeto

Para rodar e testar as diferentes implementações, siga os passos abaixo.

### Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm (geralmente instalado com o Node.js)

### Passos para Execução

1.  **Navegue até a Pasta Raiz da Atividade**
    Certifique-se de que você está no diretório correto a partir da raiz do repositório:
    ```bash
    cd Atividade6
    ```

2.  **Instale as Dependências**
    Este comando instalará o React, Vite e todas as outras bibliotecas necessárias para as quatro versões (como Tailwind e Styled-Components).
    ```bash
    npm install
    ```

3.  **Inicie o Servidor de Desenvolvimento**
    ```bash
    npm run dev
    ```
    A aplicação será iniciada e estará acessível em `http://localhost:5173` (ou outra porta indicada no terminal).

4.  **Como Alternar Entre as Versões**

    O controle de qual versão é exibida é feito no arquivo `src/main.jsx`.

    * Abra o arquivo `Atividade6/src/main.jsx` no seu editor de código.
    * Você encontrará quatro linhas de `import`, uma para cada `App` de cada versão.
    * **Descomente a linha** correspondente à versão que você deseja testar e **comente as outras três**.

    ```jsx
    // Exemplo: Para testar a versão com Styled-Components

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';

    // Descomente UMA das linhas abaixo para renderizar a versão desejada
    // import App from './versions/01-css-global/App';
    // import App from './versions/02-css-modules/App';
    // import App from './versions/03-tailwind/App';
    import App from './versions/04-styled-components/App'; // <== VERSÃO ATIVA

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    ```
    * Salve o arquivo. O servidor de desenvolvimento irá recarregar a página automaticamente com a versão selecionada.