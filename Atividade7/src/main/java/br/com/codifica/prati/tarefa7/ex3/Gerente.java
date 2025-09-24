package br.com.codifica.prati.tarefa7.ex3;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Gerente extends Funcionario {
    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        // Bônus de 20% do salário para gerente
        return getSalario().multiply(new BigDecimal("0.20")).setScale(2, RoundingMode.HALF_UP);
    }
}