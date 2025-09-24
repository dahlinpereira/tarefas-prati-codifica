package br.com.codifica.prati.tarefa7.ex8;

import java.math.BigDecimal;

public class Pac implements CalculoFreteStrategy {
    private static final BigDecimal TAXA_BASE = new BigDecimal("8.00");
    private static final BigDecimal TAXA_POR_ITEM = new BigDecimal("2.00");

    @Override
    public BigDecimal calcular(Pedido pedido) {
        if (pedido.getCepDestino() == null || !pedido.getCepDestino().matches("\\d{8}")) {
            throw new CepInvalidoException("CEP inválido para cálculo via PAC. Formato esperado: 88080100");
        }
        BigDecimal taxaItens = TAXA_POR_ITEM.multiply(new BigDecimal(pedido.getItens().size()));
        return TAXA_BASE.add(taxaItens);
    }
}