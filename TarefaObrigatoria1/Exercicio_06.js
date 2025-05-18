/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados 
fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo 
de triângulo: Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C [C<>A])
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')();

const ladoATexto = prompt("Digite o comprimento do lado A: ");
const ladoBTexto = prompt("Digite o comprimento do lado B: ");
const ladoCTexto = prompt("Digite o comprimento do lado C: ");

const a = parseFloat(ladoATexto);
const b = parseFloat(ladoBTexto);
const c = parseFloat(ladoCTexto);

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Erro: Os comprimentos dos lados devem ser números positivos válidos.");
} else {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
        console.log("\nOs lados formam um triângulo!");

        if (a === b && b === c) {
            console.log("Tipo: Equilátero (todos os lados são iguais).");
        } else if (a === b || a === c || b === c) {
            console.log("Tipo: Isósceles (pelo menos dois lados são iguais).");
        } else {
            console.log("Tipo: Escaleno (todos os lados são diferentes).");
        }
    } else {
        console.log("\nOs lados fornecidos NÃO formam um triângulo.");
    }
}
