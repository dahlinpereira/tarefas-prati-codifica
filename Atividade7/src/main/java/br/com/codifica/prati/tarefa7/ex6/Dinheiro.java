package br.com.codifica.prati.tarefa7.ex6;

import java.math.BigDecimal;
import java.util.Objects;

public final class Dinheiro { // final: a classe não pode ser estendida
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new ValidacaoException("O valor monetário não pode ser nulo ou negativo.");
        }
        this.valor = valor;
        this.moeda = moeda;
    }

    // Getters, mas sem Setters
    public BigDecimal getValor() { return valor; }
    public Moeda getMoeda() { return moeda; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.compareTo(dinheiro.valor) == 0 && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return String.format("%s %.2f", moeda, valor);
    }
}