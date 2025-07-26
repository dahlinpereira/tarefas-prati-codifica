/*
Crie um menu interativo no console que oferece ao usuário a escolha de três 
opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')();

console.log("------------------------------------");
console.log("Escolha uma operação:");
console.log("1 - Mostrar Saudação");
console.log("2 - Mostrar Elogio");
console.log("3 - Mostrar Despedida");
console.log("------------------------------------");

const opcao = prompt("Digite o número da opção desejada: ");

switch (opcao) {
    case "1":
        console.log("\nOpção escolhida: 1");
        console.log("Executando Ação 1: Olá! Tenha um ótimo dia!");
        break;

    case "2":
        console.log("\nOpção escolhida: 2");
        console.log("Executando Ação 2: Você está indo muito bem nos estudos!");
        break;

    case "3":
        console.log("\nOpção escolhida: 3");
        console.log("Executando Ação 3: Até a próxima!");
        break;

    default:
        console.log("\nOpção inválida. Por favor, escolha 1, 2 ou 3.");
}
