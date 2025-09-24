package br.com.codifica.prati.tarefa7.ex8;

import java.math.BigDecimal;

public class Item {
    private final String nome;
    private final BigDecimal preco;

    public Item(String nome, BigDecimal preco) {
        this.nome = nome;
        this.preco = preco;
    }
    
    public BigDecimal getPreco() {
        return preco;
    }
}