package br.com.codifica.prati.tarefa7.ex4;

public class Trem implements IMeioTransporte {
    private int velocidadeAtual = 0;
    private static final int VELOCIDADE_MAXIMA = 300;
    private static final int INCREMENTO_VELOCIDADE = 20;

    @Override
    public void acelerar() {
        if (velocidadeAtual >= VELOCIDADE_MAXIMA) {
            throw new VelocidadeMaximaAtingidaException("O trem já está na velocidade máxima de " + VELOCIDADE_MAXIMA + " km/h.");
        }
        velocidadeAtual = Math.min(VELOCIDADE_MAXIMA, velocidadeAtual + INCREMENTO_VELOCIDADE);
        System.out.println("Trem acelerando. Velocidade atual: " + velocidadeAtual + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidadeAtual <= 0) {
            throw new VeiculoParadoException("O trem já está parado.");
        }
        velocidadeAtual = Math.max(0, velocidadeAtual - INCREMENTO_VELOCIDADE);
        System.out.println("Trem freando. Velocidade atual: " + velocidadeAtual + " km/h.");
    }
}