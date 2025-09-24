package br.com.codifica.prati.tarefa7.ex4;

public class Bicicleta implements IMeioTransporte {
    private int velocidadeAtual = 0;
    private static final int VELOCIDADE_MAXIMA = 30;
    private static final int INCREMENTO_VELOCIDADE = 5;

    @Override
    public void acelerar() {
        if (velocidadeAtual >= VELOCIDADE_MAXIMA) {
            throw new VelocidadeMaximaAtingidaException("A bicicleta já está na velocidade máxima de " + VELOCIDADE_MAXIMA + " km/h.");
        }
        velocidadeAtual = Math.min(VELOCIDADE_MAXIMA, velocidadeAtual + INCREMENTO_VELOCIDADE);
        System.out.println("Bicicleta acelerando. Velocidade atual: " + velocidadeAtual + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidadeAtual <= 0) {
            throw new VeiculoParadoException("A bicicleta já está parada.");
        }
        velocidadeAtual = Math.max(0, velocidadeAtual - INCREMENTO_VELOCIDADE);
        System.out.println("Bicicleta freando. Velocidade atual: " + velocidadeAtual + " km/h.");
    }
}