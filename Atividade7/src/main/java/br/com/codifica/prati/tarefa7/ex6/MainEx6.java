package br.com.codifica.prati.tarefa7.ex6;

import java.math.BigDecimal;

public class MainEx6 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 6: Imutabilidade\n");

        Produto teclado = new Produto("Teclado Mecânico", new Dinheiro(new BigDecimal("350.00"), Moeda.BRL));
        Produto mouse = new Produto("Mouse Gamer", new Dinheiro(new BigDecimal("150.50"), Moeda.BRL));

        System.out.println("--- Início do Fluxo ---");
        Carrinho c1 = new Carrinho();
        System.out.println("Carrinho 1 (vazio) criado. Total: " + c1.getValorTotal());
        
        System.out.println("\n--- Adicionando 1 teclado ---");
        Carrinho c2 = c1.adicionar(new ItemCarrinho(teclado, 1));
        System.out.println("Carrinho 1 ainda tem " + c1.getItens().size() + " itens. Total: " + c1.getValorTotal());
        System.out.println("Carrinho 2 criado com " + c2.getItens().size() + " item. Total: " + c2.getValorTotal());

        System.out.println("\n--- Adicionando 2 mouses ao Carrinho 2 ---");
        Carrinho c3 = c2.adicionar(new ItemCarrinho(mouse, 2));
        System.out.println("Carrinho 2 ainda tem " + c2.getItens().size() + " item. Total: " + c2.getValorTotal());
        System.out.println("Carrinho 3 criado com " + c3.getItens().size() + " itens. Total: " + c3.getValorTotal());

        System.out.println("\n--- Removendo o teclado do Carrinho 3 ---");
        Carrinho c4 = c3.remover(teclado);
        System.out.println("Carrinho 3 ainda tem " + c3.getItens().size() + " itens. Total: " + c3.getValorTotal());
        System.out.println("Carrinho 4 criado com " + c4.getItens().size() + " item. Total: " + c4.getValorTotal());

        System.out.println("\n--- Aplicando cupom de 10% ao Carrinho 3 ---");
        Carrinho c5_com_cupom = c3.aplicarCupom(new BigDecimal("10"));
        System.out.println("Total do Carrinho 3 (sem cupom): " + c3.getValorTotal());
        System.out.println("Total do Carrinho 5 (com cupom de 10%): " + c5_com_cupom.getValorTotal());
        
        System.out.println("\n--- Tentando aplicar cupom inválido de 40% ---");
        try {
            c3.aplicarCupom(new BigDecimal("40"));
        } catch (ValidacaoException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }
    }
}