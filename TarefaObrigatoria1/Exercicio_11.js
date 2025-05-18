/*
Escreva um programa que solicita ao usuário 5 números 
e calcula a soma total utilizando um loop for.
*/

const prompt = require('prompt-sync')();

let somaTotal = 0;

console.log("Por favor, digite 5 números.");

for (let i = 1; i <= 5; i++) {
    const numeroTexto = prompt(`Digite o ${i}º número: `);
    const numero = parseFloat(numeroTexto);

    if (isNaN(numero)) {
        console.log(`Entrada inválida para o ${i}º número. Este valor não será somado.`);
    } else {
        somaTotal += numero;
    }
}

console.log(`\nA soma total dos números válidos digitados é: ${somaTotal}`);
