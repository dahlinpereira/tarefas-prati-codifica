const prompt = require('prompt-sync')();

const idadeTexto = prompt("Digite a idade da pessoa: ");
const idade = parseInt(idadeTexto);

if (isNaN(idade) || idade < 0) {
    console.log("Erro: Por favor, digite uma idade válida (número inteiro não negativo).");
} else {
    let categoria;
    
    if (idade <= 12) {
        categoria = "Criança";
    } else if (idade <= 17) {
        categoria = "Adolescente";
    } else if (idade <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }

    console.log(`\nCom ${idade} anos, a pessoa é classificada como: ${categoria}.`);
}
