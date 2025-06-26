/*
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.
 */

function extrairPalavrasUnicas(frase) {
  const palavras = frase.toLowerCase().replace(/[,.!?]/g, '').split(/\s+/);
  const palavrasUnicas = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (palavrasUnicas.indexOf(palavra) === -1) {
      palavrasUnicas.push(palavra);
    }
  }

  return palavrasUnicas;
}

const texto = 'olá olá mundo mundo! este é um teste de palavras únicas.';
const resultado = extrairPalavrasUnicas(texto);

console.log('Frase original:', texto);
console.log('Palavras únicas:', resultado);