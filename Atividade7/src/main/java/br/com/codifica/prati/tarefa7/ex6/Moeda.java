package br.com.codifica.prati.tarefa7.ex6;

public enum Moeda {
    BRL("Real Brasileiro"),
    USD("Dólar Americano"),
    EUR("Euro");

    private final String descricao;

    Moeda(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}