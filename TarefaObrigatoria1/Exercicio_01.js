/*
Escreva um programa que recebe um número inteiro e verifica se 
ele é par ou ímpar utilizando uma estrutura de controle if.
*/

const prompt = require('prompt-sync')();

const numeroTexto = prompt("Digite um número inteiro: ");
const numero = parseInt(numeroTexto);

if (isNaN(numero)) {
    console.log("Erro: O valor digitado não é um número inteiro válido.");
} else {
    const resto = numero % 2;
    
    if (resto === 0) {
        console.log(`O número ${numero} é PAR.`);
    } else {
        console.log(`O número ${numero} é ÍMPAR.`);
    }
}
