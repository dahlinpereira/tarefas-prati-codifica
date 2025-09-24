# Atividade 7 - Java: Pilares da Programação Orientada a Objetos

Este projeto contém a resolução da "Lista de Tarefas 7 - Java POO" da trilha de formação Dev. Full Stack Jr. O objetivo é aplicar e demonstrar de forma prática os conceitos fundamentais e avançados da Programação Orientada a Objetos (POO) utilizando a linguagem Java.

A atividade é composta por 8 exercícios independentes, cada um focado em um pilar ou padrão de projeto específico, construindo uma base sólida sobre como estruturar aplicações robustas, flexíveis e de fácil manutenção.

## Conceitos e Padrões Abordados

Cada exercício foi estruturado para isolar e explorar um conceito-chave da POO:

* **Exercício 1: Encapsulamento:** Proteção de dados e validação de estado através de getters e setters.
* **Exercício 2: Validação de Regras e Exceções Customizadas:** Adição de regras de negócio e criação de exceções específicas para um tratamento de erros mais claro.
* **Exercício 3: Herança e Polimorfismo:** Reutilização de código e especialização de comportamento com superclasses e subclasses.
* **Exercício 4: Polimorfismo com Interfaces:** Definição de contratos e comportamentos desacoplados através de interfaces.
* **Exercício 5: Abstração:** Criação de modelos base com classes e métodos abstratos para definir estruturas comuns.
* **Exercício 6: Imutabilidade e Objetos de Valor:** Design de classes cujos objetos não podem ser modificados após a criação, garantindo segurança e previsibilidade.
* **Exercício 7: Generics e o Padrão Repositório:** Construção de componentes de acesso a dados genéricos, reutilizáveis e com segurança de tipo.
* **Exercício 8: Padrão de Projeto Strategy:** Implementação de uma família de algoritmos intercambiáveis, permitindo a troca de comportamento em tempo de execução, com uso de Lambdas.

## Como Compilar e Executar o Projeto

Diferente das atividades anteriores baseadas em Node.js, este projeto é escrito em Java puro e requer um JDK (Java Development Kit) para compilação e execução.

### Pré-requisitos

* **JDK (Java Development Kit):** Versão 17 ou superior.
    * Você pode baixar o JDK da [Oracle](https://www.oracle.com/java/technologies/downloads/) ou uma distribuição OpenJDK como o [Eclipse Temurin](https://adoptium.net/).
    * Verifique a instalação no seu terminal com o comando:
        ```bash
        java -version
        ```

### Passos para Execução (via Linha de Comando)

1.  **Navegue até a Pasta da Atividade**
    Certifique-se de que você está no diretório `Atividade7` a partir da raiz do repositório.

2.  **Compile Todos os Arquivos `.java`**
    O comando abaixo irá compilar todos os arquivos-fonte e colocar os arquivos `.class` resultantes em uma nova pasta chamada `out`. Execute-o a partir da pasta `Atividade7`.

    ```bash
    # No Windows (usando Git Bash ou PowerShell)
    javac -d out src/main/java/br/com/codifica/prati/tarefa7/ex*/*.java

    # No Linux/macOS
    javac -d out src/main/java/br/com/codifica/prati/tarefa7/ex*/*.java
    ```

3.  **Execute o `main` de Cada Exercício**
    Após a compilação, você pode executar cada exercício individualmente. Os comandos abaixo devem ser executados **a partir da pasta `Atividade7`**. O `-cp out` (classpath) diz ao Java para procurar os arquivos compilados na pasta `out`.

    ```bash
    # Para executar o Exercício 1
    java -cp out br.com.codifica.prati.tarefa7.ex1.MainEx1

    # Para executar o Exercício 2
    java -cp out br.com.codifica.prati.tarefa7.ex2.MainEx2

    # Para executar o Exercício 3
    java -cp out br.com.codifica.prati.tarefa7.ex3.MainEx3

    # ...e assim por diante para os outros exercícios:
    java -cp out br.com.codifica.prati.tarefa7.ex4.MainEx4
    java -cp out br.com.codifica.prati.tarefa7.ex5.MainEx5
    java -cp out br.com.codifica.prati.tarefa7.ex6.MainEx6
    java -cp out br.com.codifica.prati.tarefa7.ex7.MainEx7
    java -cp out br.com.codifica.prati.tarefa7.ex8.MainEx8
    ```

### Alternativa: Execução via IDE

Se você estiver usando uma IDE como IntelliJ IDEA, Eclipse ou VS Code com as extensões Java, o processo é mais simples:
1.  Abra a pasta `Atividade7` como um novo projeto.
2.  Navegue até o arquivo `MainEx*.java` que deseja executar.
3.  Clique com o botão direito no editor e selecione a opção "Run" ou procure pelo ícone de "play" ao lado do método `main`.