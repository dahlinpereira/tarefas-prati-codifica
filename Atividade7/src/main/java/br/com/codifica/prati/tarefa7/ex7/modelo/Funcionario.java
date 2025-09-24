package br.com.codifica.prati.tarefa7.ex7.modelo;

import br.com.codifica.prati.tarefa7.ex7.Identificavel;

public class Funcionario implements Identificavel<String> {
    private final String matricula; // A matrícula será o ID
    private final String nome;

    public Funcionario(String matricula, String nome) {
        this.matricula = matricula;
        this.nome = nome;
    }

    @Override
    public String getId() {
        return matricula;
    }
    
    public String getNome() { return nome; }

    @Override
    public String toString() {
        return "Funcionario{" + "matricula='" + matricula + '\'' + ", nome='" + nome + '\'' + '}';
    }
}