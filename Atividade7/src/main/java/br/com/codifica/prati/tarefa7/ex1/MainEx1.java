package br.com.codifica.prati.tarefa7.ex1;

import java.math.BigDecimal;

public class MainEx1 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 1: Encapsulamento");

        // 1. Criando uma instância com valores válidos
        System.out.println("\n--- Criando produto com valores válidos ---");
        Produto produtoValido = new Produto("Notebook Gamer", new BigDecimal("7500.00"), 10);
        System.out.println("Produto criado com sucesso: " + produtoValido);

        // 2. Alterando para valores válidos
        System.out.println("\n--- Alterando para valores válidos ---");
        produtoValido.setPreco(new BigDecimal("7250.50"));
        produtoValido.setQuantidadeEmEstoque(8);
        System.out.println("Produto alterado: " + produtoValido);

        // 3. Tentando atribuições inválidas
        System.out.println("\n--- Tentando atribuições inválidas (dentro de try-catch) ---");
        try {
            System.out.println("Tentando atribuir um preço negativo...");
            produtoValido.setPreco(new BigDecimal("-100.00"));
        } catch (IllegalArgumentException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }
        try {
            System.out.println("Tentando atribuir uma quantidade negativa...");
            produtoValido.setQuantidadeEmEstoque(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }
        try {
            System.out.println("Tentando atribuir um nome vazio...");
            produtoValido.setNome("");
        } catch (IllegalArgumentException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }
    }
}