# Lista de Exercícios - Trilha Dev. Full Stack Jr. 2025

Este documento fornece as instruções para configurar o ambiente e executar as resoluções dos exercícios da trilha de formação Dev. Full Stack Jr. 2025.

Os exercícios aqui presentes estão organizados em pastas por tarefa e abordam conceitos fundamentais e intermediários de JavaScript, como variáveis, tipos de dados, operadores, estruturas de controle, funções, recursão, manipulação de arrays e objetos, utilizando Node.js como ambiente de execução.

## Estrutura dos Arquivos

Dentro deste repositório, os arquivos de cada lista de exercícios estão localizados em pastas nomeadas sequencialmente (ex: `TarefaObrigatoria1/`, `TarefaObrigatoria2/`). Cada arquivo `.js` dentro dessas pastas corresponde a um desafio específico e inclui seu enunciado no topo do código.

Os arquivos de configuração do projeto Node.js (`package.json` e `package-lock.json`) se encontram na raiz do diretório `tarefas-prati-codifica/`. A pasta `node_modules/`, que contém as dependências instaladas (como a biblioteca `prompt-sync`), é intencionalmente ignorada pelo Git (via arquivo `.gitignore`) para manter o repositório mais leve.

## Pré-requisitos

Antes de prosseguir, garanta que você possui o **Node.js** e o **NPM** instalados em sua máquina.

* **Node.js**: Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org/). Para verificar se está instalado, abra seu terminal (Prompt de Comando, PowerShell, Git Bash, etc.) e execute:
    ```bash
    node -v
    ```
    Você deverá visualizar a versão instalada (ex: `v20.11.0`).

* **NPM (Node Package Manager)**: É instalado automaticamente com o Node.js e é essencial para gerenciar as dependências do projeto. Para verificar sua versão, execute:
    ```bash
    npm -v
    ```

## Configuração do Ambiente Local

Siga os passos abaixo para preparar seu ambiente e executar os exercícios:

1.  **Clone o Repositório** (Caso ainda não tenha feito):
    Se você está acessando este `README.md` online no GitHub, primeiro clone o repositório para o seu computador.
    ```bash
    git clone https://github.com/dahlinpereira/tarefas-prati-codifica.git
    ```

2.  **Acesse a Pasta do Projeto**:
    Utilizando o terminal, navegue até o diretório raiz que você acabou de clonar:
    ```bash
    cd tarefas-prati-codifica
    ```

3.  **Instale as Dependências do Projeto**:
    Dentro da pasta `tarefas-prati-codifica/`, execute o comando abaixo. Ele lerá o arquivo `package.json` e instalará todas as bibliotecas necessárias para todas as tarefas (como `prompt-sync`) na subpasta `node_modules/`:
    ```bash
    npm install
    ```
    Este passo precisa ser executado apenas uma vez.

---

## Como Executar os Exercícios

Com o ambiente configurado, você pode executar cada exercício individualmente. Utilize o comando `node` seguido do caminho completo do arquivo do exercício a partir da raiz `tarefas-prati-codifica/`.

### TarefaObrigatoria1 - Estudando as Estruturas Básicas

**Exemplos:**
```bash
# Para executar o primeiro exercício da Tarefa 1
node TarefaObrigatoria1/Exercicio_01.js

# Para executar o sexto exercício da Tarefa 1
node TarefaObrigatoria1/Exercicio_06.js
```

### TarefaObrigatoria2 - Aplicando conceitos intermediários em JS

**Exemplos:**
```bash
# Para executar o primeiro exercício da Tarefa 2
node TarefaObrigatoria2/Exercicio_01.js

# Para executar o segundo exercício da Tarefa 2
node TarefaObrigatoria2/Exercicio_02.js
```

...e assim por diante para os demais arquivos .js de cada tarefa.

Siga as instruções que aparecerem no terminal, pois muitos exercícios são interativos e podem solicitar que você digite alguma informação.

## Observações Importantes
* Este projeto utiliza o Node.js como ambiente de execução para os scripts JavaScript.
* As dependências são gerenciadas pelo NPM e definidas no arquivo package.json.
* A pasta node_modules/ é automaticamente ignorada pelo Git através do arquivo .gitignore e não deve ser enviada para o repositório remoto.
* Certifique-se de ter seguido todos os passos de configuração para garantir a correta execução dos exercícios.
* Em caso de dúvidas ou problemas, fique à vontade para entrar em contato.