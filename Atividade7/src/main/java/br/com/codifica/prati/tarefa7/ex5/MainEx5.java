package br.com.codifica.prati.tarefa7.ex5;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class MainEx5 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 5: Abstração com Sistema de Pagamentos\n");

        List<FormaPagamento> pagamentos = new ArrayList<>();

        // Casos de Sucesso
        pagamentos.add(new CartaoCredito("1234567812345678", "J. Silva"));
        pagamentos.add(new Boleto("123456789012345678901234567890123456789012345678"));
        pagamentos.add(new Pix("joao.silva@email.com"));

        // Casos de Falha
        pagamentos.add(new CartaoCredito("1234", "M. Sousa")); // Número inválido
        pagamentos.add(new Boleto("invalido")); // Código inválido
        pagamentos.add(new Pix(" ")); // Chave vazia

        BigDecimal valorDaCompra = new BigDecimal("250.75");

        for (FormaPagamento forma : pagamentos) {
            System.out.println("\n-------------------------------------------");
            System.out.println("Tentando processar com: " + forma.getClass().getSimpleName());
            try {
                forma.processarPagamento(valorDaCompra);
            } catch (PagamentoInvalidoException e) {
                System.out.println("!!! FALHA NO PAGAMENTO: " + e.getMessage());
            }
            System.out.println("-------------------------------------------");
        }
    }
}