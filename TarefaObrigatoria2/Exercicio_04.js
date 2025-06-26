/*
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.
 */

function fatorial(n) {
  if (n < 0) {
    throw new Error('Erro: Fatorial não é definido para números negativos.');
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

try {
  console.log('Fatorial de 5:', fatorial(5));
  console.log('Fatorial de 0:', fatorial(0));
  console.log('Fatorial de 1:', fatorial(1));
  console.log('Fatorial de -2:', fatorial(-2));
} catch (error) {
  console.error(error.message);
}