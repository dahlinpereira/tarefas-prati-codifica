package br.com.codifica.prati.tarefa7.ex5;

public class Boleto extends FormaPagamento {
    private final String codigoDeBarras;

    public Boleto(String codigoDeBarras) {
        this.codigoDeBarras = codigoDeBarras;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        System.out.println("Validando Boleto...");
        if (codigoDeBarras == null || !codigoDeBarras.matches("\\d{48}")) {
            throw new PagamentoInvalidoException("Código de barras do boleto inválido. Deve conter 48 dígitos.");
        }
        System.out.println("Boleto válido.");
    }
}