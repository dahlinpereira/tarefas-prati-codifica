/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores 
iguais) e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')();

const valor1Texto = prompt("Digite o primeiro valor: ");
const valor1 = parseFloat(valor1Texto);

const valor2Texto = prompt("Digite o segundo valor: ");
const valor2 = parseFloat(valor2Texto);

if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Erro: Ambos os valores devem ser números válidos.");
} else if (valor1 === valor2) {
    console.log("Erro: Os valores devem ser diferentes, conforme o enunciado.");
} else {
    console.log("\nValores em ordem crescente:");

    if (valor1 < valor2) {
        console.log(valor1);
        console.log(valor2);
    } else {
        console.log(valor2);
        console.log(valor1);
    }
}
