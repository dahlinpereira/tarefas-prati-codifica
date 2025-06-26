/*
Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.
 */

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function realizarBusca(query) {
  console.log(`Buscando por: "${query}"...`);
}

const buscaDebounced = debounce(realizarBusca, 500);

console.log('Digite algo e pressione Enter. A busca só será realizada 500ms após a última entrada.');
console.log('Para sair, digite "sair".');

const prompt = require('prompt-sync')();
let userInput;

while ((userInput = prompt('> ')) !== 'sair') {
    buscaDebounced(userInput);
}