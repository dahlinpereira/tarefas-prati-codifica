/*
Crie um programa que exibe a tabuada de um número fornecido pelo 
usuário (de 1 a 10) utilizando um loop for.
*/

const prompt = require('prompt-sync')();

const numeroTexto = prompt("Digite um número para ver a sua tabuada: ");
const numeroBase = parseFloat(numeroTexto);

if (isNaN(numeroBase)) {
    console.log("Erro: Por favor, digite um número válido.");
} else {
    console.log(`\n--- Tabuada do ${numeroBase} ---`);

    for (let i = 1; i <= 10; i++) {
        const resultado = numeroBase * i;
        console.log(`${numeroBase} x ${i} = ${resultado}`);
    }

    console.log("--------------------");
}
