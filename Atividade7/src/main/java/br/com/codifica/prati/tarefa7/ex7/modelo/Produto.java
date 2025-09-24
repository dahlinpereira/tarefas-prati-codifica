package br.com.codifica.prati.tarefa7.ex7.modelo;

import br.com.codifica.prati.tarefa7.ex7.Identificavel;

public class Produto implements Identificavel<Long> {
    private final Long id;
    private final String nome;

    public Produto(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    @Override
    public Long getId() {
        return id;
    }
    
    public String getNome() { return nome; }

    @Override
    public String toString() {
        return "Produto{" + "id=" + id + ", nome='" + nome + '\'' + '}';
    }
}