package br.com.codifica.prati.tarefa7.ex8;

import java.math.BigDecimal;

public class RetiradaNaLoja implements CalculoFreteStrategy {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return BigDecimal.ZERO; // Custo zero
    }
}