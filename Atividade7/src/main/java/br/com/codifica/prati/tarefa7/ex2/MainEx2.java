package br.com.codifica.prati.tarefa7.ex2;

import java.math.BigDecimal;

public class MainEx2 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 2: Desconto com Validação");

        Produto tv = new Produto("TV 4K", new BigDecimal("3000.00"), 15);
        
        System.out.println("\n--- Aplicando desconto válido ---");
        System.out.println("Preço original: " + tv.getPreco());
        tv.aplicarDesconto(15.0);
        System.out.println("Preço com 15% de desconto: " + tv.getPreco());

        System.out.println("\n--- Tentando aplicar desconto inválido (> 50%) ---");
        try {
            tv.aplicarDesconto(60.0);
        } catch (DescontoInvalidoException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
            System.out.println("Preço permaneceu o mesmo: " + tv.getPreco());
        }
    }
}