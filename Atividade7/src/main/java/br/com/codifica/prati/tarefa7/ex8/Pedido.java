package br.com.codifica.prati.tarefa7.ex8;

import java.math.BigDecimal;
import java.util.List;

public class Pedido {
    private final List<Item> itens;
    private final String cepDestino;
    private CalculoFreteStrategy estrategiaDeFrete; // A referência para a estratégia

    public Pedido(List<Item> itens, String cepDestino) {
        this.itens = itens;
        this.cepDestino = cepDestino;
    }

    // Método para injetar/trocar a estratégia
    public void setEstrategiaDeFrete(CalculoFreteStrategy estrategiaDeFrete) {
        this.estrategiaDeFrete = estrategiaDeFrete;
    }

    // Delega o cálculo para o objeto de estratégia
    public BigDecimal calcularFrete() {
        if (estrategiaDeFrete == null) {
            throw new IllegalStateException("A estratégia de frete não foi definida.");
        }
        return estrategiaDeFrete.calcular(this);
    }
    
    public List<Item> getItens() {
        return itens;
    }
    
    public String getCepDestino() {
        return cepDestino;
    }
    
    public BigDecimal getValorTotalItens() {
        return itens.stream()
                .map(Item::getPreco)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}