/*
Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.
 */

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log('Retornando do cache...');
      return cache[key];
    }

    console.log('Calculando resultado...');
    const resultado = fn.apply(this, args);
    cache[key] = resultado;
    return resultado;
  };
}

function somaCara(a, b) {
  for (let i = 0; i < 1e9; i++) {}
  return a + b;
}

const somaMemoizada = memoize(somaCara);

console.log(somaMemoizada(5, 10));
console.log(somaMemoizada(5, 10));
console.log(somaMemoizada(2, 3));
console.log(somaMemoizada(2, 3));