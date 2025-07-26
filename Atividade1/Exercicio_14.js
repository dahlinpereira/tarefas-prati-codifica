/*
Crie um programa que calcula o fatorial de um número 
fornecido pelo usuário utilizando um loop for ou while.
*/

const prompt = require('prompt-sync')();

const numeroTexto = prompt("Digite um número inteiro não negativo para calcular o fatorial: ");
const numero = parseInt(numeroTexto);

if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
    console.log("Erro: Por favor, digite um número inteiro não negativo válido.");
} else {
    let fatorial = 1;

    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} (${numero}!) é: ${fatorial}`);
}
