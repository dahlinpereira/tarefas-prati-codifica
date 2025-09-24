package br.com.codifica.prati.tarefa7.ex2;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Produto {
    private String nome;
    private BigDecimal preco;
    private int quantidadeEmEstoque;
    // Construtor, Getters e Setters do Exercício 1...
    public Produto(String nome, BigDecimal preco, int quantidadeEmEstoque) { /* ... */ }
    public String getNome() { return nome; }
    public BigDecimal getPreco() { return preco; }
    public void setNome(String nome) { /* ... */ }
    public void setPreco(BigDecimal preco) { /* ... */ }
    public void setQuantidadeEmEstoque(int q) { /* ... */ }


    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new DescontoInvalidoException("A porcentagem de desconto deve estar entre 0 e 50.");
        }
        BigDecimal fatorDesconto = BigDecimal.ONE.subtract(BigDecimal.valueOf(porcentagem / 100.0));
        this.preco = this.preco.multiply(fatorDesconto).setScale(2, RoundingMode.HALF_UP);
    }

    // (Omitindo o corpo dos métodos do ex1 para brevidade)
}