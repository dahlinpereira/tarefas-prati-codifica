# Lista de Exercícios 1 - Trilha Dev. Full Stack Jr. 2025

Este documento fornece as instruções para configurar o ambiente e executar os exercícios da **Lista de Exercícios 1 - "Estudando as Estruturas Básicas"**, referente ao Módulo 1 da Trilha Dev. Full Stack Jr. 2025.

Os exercícios aqui presentes abordam conceitos fundamentais de JavaScript, como variáveis, tipos de dados, operadores, estruturas condicionais, laços de repetição e interação básica com o usuário via terminal, utilizando Node.js.

## Estrutura dos Arquivos

Dentro deste repositório, os arquivos da Lista de Exercícios 1 estão localizados na pasta `TarefaObrigatoria1/`. Cada arquivo `.js` nomeado sequencialmente (ex: `Exercicio_01.js`, `Exercicio_02.js`) corresponde a um desafio específico e inclui seu enunciado.

Os arquivos de configuração do projeto Node.js para esta tarefa (`package.json` e `package-lock.json`) se encontram dentro da pasta `tarefas-prati-codifica/`. A pasta `node_modules/`, que contém as dependências instaladas (como a biblioteca `prompt-sync`), é intencionalmente ignorada pelo Git (via arquivo `.gitignore`) para manter o repositório mais leve. As instruções para instalação das dependências necessárias estão detalhadas abaixo.

## Pré-requisitos

Antes de prosseguir, garanta que você possui o **Node.js** instalado em sua máquina.
* Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org/).
* Para verificar se o Node.js está instalado, abra seu terminal (Prompt de Comando, PowerShell, Git Bash ou o terminal do seu sistema operacional) e execute:
    ```bash
    node -v
    ```
    Você deverá visualizar a versão instalada (ex: `v18.17.0`).

O **NPM (Node Package Manager)** é instalado automaticamente com o Node.js e é essencial para gerenciar as bibliotecas (dependências) do projeto. Para verificar a versão do NPM:
    ```bash
    npm -v
    ```

## Configuração do Ambiente Local

Siga os passos abaixo para preparar seu ambiente e executar os exercícios:

1.  **Clone o Repositório (Caso ainda não tenha feito):**
    Se você está acessando este `README.md` online no GitHub, primeiro clone o repositório para o seu computador:
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git)
    ```
    *(Substitua `https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git` pela URL real do seu repositório.)*

2.  **Navegue até a Pasta da Tarefa:**
    Utilizando o terminal, acesse o diretório onde os exercícios desta lista estão localizados:
    ```bash
    cd caminho/para/seu-repositorio/TarefaObrigatoria1
    ```
    *(Ajuste `caminho/para/seu-repositorio/` para o local correto em sua máquina.)*

3.  **Instale as Dependências do Projeto:**
    Dentro da pasta `tarefas-prati-codifica/`, execute o comando abaixo. Ele lerá o arquivo `package.json` e instalará as bibliotecas necessárias (como `prompt-sync`) na subpasta `node_modules/`:
    ```bash
    npm install
    ```

## Como Executar os Exercícios

Com o ambiente configurado e as dependências instaladas, você pode executar cada exercício individualmente. Certifique-se de que você está no diretório `TarefaObrigatoria1/` no seu terminal.

Utilize o comando `node` seguido do nome do arquivo do exercício:

**Exemplos:**

* Para executar o primeiro exercício:
    ```bash
    node Exercicio_01.js
    ```
* Para executar o segundo exercício:
    ```bash
    node Exercicio_02.js
    ```
    ...e assim por diante para os demais arquivos `.js` da tarefa.

Siga as instruções que aparecerem no terminal, pois alguns exercícios podem solicitar que você digite alguma informação.

## Observações Importantes

* Este projeto utiliza o Node.js como ambiente de execução para os scripts JavaScript.
* As dependências são gerenciadas pelo NPM e definidas no arquivo `package.json` localizado na pasta `tarefas-prati-codifica/`.
* A pasta `node_modules/` é automaticamente ignorada pelo Git através do arquivo `.gitignore` e não deve ser enviada para o repositório remoto.
* Certifique-se de ter seguido todos os passos de configuração para garantir a correta execução dos exercícios.
* Em caso de dúvidas ou problemas, fique a vontade para entrar em contato comigo.
