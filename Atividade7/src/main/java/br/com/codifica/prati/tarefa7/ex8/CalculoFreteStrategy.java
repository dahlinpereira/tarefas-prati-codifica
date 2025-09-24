package br.com.codifica.prati.tarefa7.ex8;

import java.math.BigDecimal;

@FunctionalInterface
public interface CalculoFreteStrategy {
    BigDecimal calcular(Pedido pedido);
}