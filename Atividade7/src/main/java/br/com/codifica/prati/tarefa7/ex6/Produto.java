package br.com.codifica.prati.tarefa7.ex6;

public final class Produto {
    private final String nome;
    private final Dinheiro preco;

    public Produto(String nome, Dinheiro preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() { return nome; }
    public Dinheiro getPreco() { return preco; }

    @Override
    public String toString() {
        return "Produto{" + "nome='" + nome + '\'' + ", preco=" + preco + '}';
    }
}