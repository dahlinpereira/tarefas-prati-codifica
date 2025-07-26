/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se 
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs 
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

const quantidadeTexto = prompt("Digite o número de maçãs compradas: ");
const quantidade = parseInt(quantidadeTexto);

if (isNaN(quantidade) || !Number.isInteger(quantidade) || quantidade < 0) {
    console.log("Erro: Por favor, digite uma quantidade válida (número inteiro não negativo).");
} else {
    let precoUnitario;

    if (quantidade >= 12) {
        precoUnitario = 0.25;
    } else {
        precoUnitario = 0.30;
    }

    const valorTotal = quantidade * precoUnitario;

    console.log(`\nQuantidade comprada: ${quantidade}`);
    console.log(`Preço por unidade: R$ ${precoUnitario.toFixed(2)}`);
    console.log(`Valor total da compra: ${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}
