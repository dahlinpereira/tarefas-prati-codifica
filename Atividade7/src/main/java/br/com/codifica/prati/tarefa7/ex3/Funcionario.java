package br.com.codifica.prati.tarefa7.ex3;

import java.math.BigDecimal;

public class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        this.nome = nome;
        if (salario == null || salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("O salário deve ser um valor positivo.");
        }
        this.salario = salario;
    }

    public String getNome() { return nome; }
    public BigDecimal getSalario() { return salario; }
    
    public BigDecimal calcularBonus() {
        return BigDecimal.ZERO; // Comportamento padrão
    }
}