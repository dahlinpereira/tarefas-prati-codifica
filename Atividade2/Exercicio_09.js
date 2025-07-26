/*
Escreva duas funções:
* paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
* objetoParaPares(obj) faz o inverso, retornando um array de pares.
 */

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const arrayDePares = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'São Paulo'],
];

const meuObjeto = {
  produto: 'Livro',
  preco: 49.9,
  disponivel: true,
};

const objetoConvertido = paresParaObjeto(arrayDePares);
console.log('Array de Pares para Objeto:', objetoConvertido);

const paresConvertidos = objetoParaPares(meuObjeto);
console.log('Objeto para Array de Pares:', paresConvertidos);