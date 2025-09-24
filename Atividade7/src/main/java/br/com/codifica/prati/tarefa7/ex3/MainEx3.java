package br.com.codifica.prati.tarefa7.ex3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class MainEx3 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 3: Herança e Polimorfismo");

        Funcionario gerente = new Gerente("Ana Silva", new BigDecimal("12000.00"));
        Funcionario devSenior = new Desenvolvedor("João Costa", new BigDecimal("9500.00"));

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(gerente);
        funcionarios.add(devSenior);
        
        System.out.println("\n--- Cálculo de Bônus ---");
        for (Funcionario f : funcionarios) {
            System.out.printf("Funcionário: %s | Cargo: %s | Bônus: R$%.2f\n",
                f.getNome(),
                f.getClass().getSimpleName(),
                f.calcularBonus()
            );
        }
    }
}