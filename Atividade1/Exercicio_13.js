/*
Fazer um algoritmo para receber números decimais até que o usuário 
digite 0 e fazer a média aritmética desses números.
*/

const prompt = require('prompt-sync')();

let soma = 0;
let contadorDeNumeros = 0;
let numeroAtual;

do {
    const numeroTexto = prompt(`Digite um número decimal (ou 0 para finalizar): `);
    numeroAtual = parseFloat(numeroTexto);

    if (isNaN(numeroAtual)) {
        console.log("Entrada inválida. Por favor, digite um número.");
        continue;
    }

    if (numeroAtual !== 0) {
        soma += numeroAtual;
        contadorDeNumeros++;
    }

} while (numeroAtual !== 0);

console.log("\n--- Cálculo da Média ---");

if (contadorDeNumeros > 0) {
    const media = soma / contadorDeNumeros;
    console.log(`Quantidade de números válidos digitados: ${contadorDeNumeros}`);
    console.log(`Soma total: ${soma}`);
    console.log(`Média aritmética: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado para calcular a média.");
}
