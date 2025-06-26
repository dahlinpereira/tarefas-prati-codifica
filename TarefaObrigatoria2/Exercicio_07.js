/*
Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.
 */

const produtos = [
  { nome: 'Laptop', preco: 2500 },
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 150 },
  { nome: 'Monitor', preco: 800 },
  { nome: 'Headset', preco: 250 },
];

function ordenarProdutosPorPreco(listaDeProdutos) {
  const produtosOrdenados = listaDeProdutos.sort((a, b) => a.preco - b.preco);

  const nomesDosProdutos = produtosOrdenados.map(produto => produto.nome);

  return nomesDosProdutos;
}

const nomesOrdenados = ordenarProdutosPorPreco(produtos);
console.log(nomesOrdenados);