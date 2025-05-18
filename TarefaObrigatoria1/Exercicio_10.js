/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require('prompt-sync')();

const numeroTexto = prompt("Digite um número inteiro: ");
const numero = parseInt(numeroTexto);

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Entrada inválida. Por favor, digite um número inteiro.");
} else {
    console.log(`\nExibindo o número ${numero} dez vezes:`);

    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}
