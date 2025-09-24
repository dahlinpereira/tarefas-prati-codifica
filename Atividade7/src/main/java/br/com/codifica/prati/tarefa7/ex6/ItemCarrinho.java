package br.com.codifica.prati.tarefa7.ex6;

import java.math.BigDecimal;

public final class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (quantidade <= 0) {
            throw new ValidacaoException("A quantidade do item deve ser maior que zero.");
        }
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() { return produto; }
    public int getQuantidade() { return quantidade; }

    public Dinheiro getSubtotal() {
        BigDecimal subtotalValor = produto.getPreco().getValor().multiply(new BigDecimal(quantidade));
        return new Dinheiro(subtotalValor, produto.getPreco().getMoeda());
    }
}