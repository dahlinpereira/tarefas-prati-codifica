package br.com.codifica.prati.tarefa7.ex8;

import java.math.BigDecimal;
import java.util.Arrays;

public class MainEx8 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 8: Padrão Strategy\n");

        Item item1 = new Item("Livro", new BigDecimal("80.00"));
        Item item2 = new Item("Caneta", new BigDecimal("5.00"));
        Pedido pedido = new Pedido(Arrays.asList(item1, item2), "88080100");

        System.out.println("Pedido com valor total de itens: R$" + pedido.getValorTotalItens());
        
        System.out.println("\n--- Trocando de Estratégia em Tempo de Execução ---");
        
        // 1. Usando a estratégia SEDEX
        pedido.setEstrategiaDeFrete(new Sedex());
        System.out.println("Frete com SEDEX: R$" + pedido.calcularFrete());

        // 2. Trocando para a estratégia PAC no MESMO pedido
        pedido.setEstrategiaDeFrete(new Pac());
        System.out.println("Frete com PAC: R$" + pedido.calcularFrete());
        
        // 3. Trocando para Retirada na Loja
        pedido.setEstrategiaDeFrete(new RetiradaNaLoja());
        System.out.println("Frete com Retirada na Loja: R$" + pedido.calcularFrete());

        System.out.println("\n--- Usando Estratégia Promocional via LAMBDA ---");
        // Frete grátis para compras acima de R$ 200, senão, frete PAC
        CalculoFreteStrategy fretePromocional = (p) -> {
            if (p.getValorTotalItens().compareTo(new BigDecimal("200.00")) > 0) {
                System.out.println("Aplicando promoção: Frete Grátis!");
                return BigDecimal.ZERO;
            }
            return new Pac().calcular(p); // Lógica padrão
        };
        
        // Teste 1: Pedido que NÃO se qualifica para a promoção
        pedido.setEstrategiaDeFrete(fretePromocional);
        System.out.println("Frete promocional para pedido de R$" + pedido.getValorTotalItens() + ": R$" + pedido.calcularFrete());

        // Teste 2: Pedido que se qualifica
        Pedido pedidoGrande = new Pedido(Arrays.asList(item1, new Item("Monitor", new BigDecimal("1500"))), "88080100");
        pedidoGrande.setEstrategiaDeFrete(fretePromocional);
        System.out.println("Frete promocional para pedido de R$" + pedidoGrande.getValorTotalItens() + ": R$" + pedidoGrande.calcularFrete());


        System.out.println("\n--- Testando Validação de CEP Inválido ---");
        Pedido pedidoCepInvalido = new Pedido(Arrays.asList(item1), "1234");
        pedidoCepInvalido.setEstrategiaDeFrete(new Sedex());
        try {
            pedidoCepInvalido.calcularFrete();
        } catch (CepInvalidoException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }
    }
}