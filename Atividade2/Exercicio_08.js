/*
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.
 */

const vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'Bruno', total: 250 },
  { cliente: 'Ana', total: 50 },
  { cliente: 'Carla', total: 300 },
  { cliente: 'Bruno', total: 150 },
  { cliente: 'Ana', total: 200 },
];

function agruparVendasPorCliente(listaDeVendas) {
  return listaDeVendas.reduce((acc, venda) => {
    const { cliente, total } = venda;

    if (!acc[cliente]) {
      acc[cliente] = 0;
    }

    acc[cliente] += total;

    return acc;
  }, {});
}

const totalPorCliente = agruparVendasPorCliente(vendas);
console.log(totalPorCliente);