package br.com.codifica.prati.tarefa7.ex4;

import java.util.ArrayList;
import java.util.List;

public class MainEx4 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 4: Polimorfismo com Interface\n");

        List<IMeioTransporte> veiculos = new ArrayList<>();
        veiculos.add(new Carro());
        veiculos.add(new Bicicleta());
        veiculos.add(new Trem());

        // Acelerando todos os veículos de forma polimórfica
        System.out.println("--- Acelerando todos os veículos ---");
        for (IMeioTransporte veiculo : veiculos) {
            try {
                veiculo.acelerar();
                veiculo.acelerar();
            } catch (RuntimeException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }

        // Freando todos os veículos
        System.out.println("\n--- Freando todos os veículos ---");
        for (IMeioTransporte veiculo : veiculos) {
             try {
                veiculo.frear();
            } catch (RuntimeException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }

        // Demonstração de tratamento de exceções
        System.out.println("\n--- Testando limites e exceções ---");
        IMeioTransporte bicicletaParaTeste = new Bicicleta();
        
        System.out.println("\nTentando frear a bicicleta parada:");
        try {
            bicicletaParaTeste.frear();
        } catch (VeiculoParadoException e) {
            System.out.println("Capturado: " + e.getMessage());
        }

        System.out.println("\nAcelerando a bicicleta até o limite:");
        try {
            for (int i = 0; i < 10; i++) { // Vai acelerar várias vezes
                 bicicletaParaTeste.acelerar();
            }
        } catch (VelocidadeMaximaAtingidaException e) {
            System.out.println("Capturado após várias acelerações: " + e.getMessage());
        }
    }
}