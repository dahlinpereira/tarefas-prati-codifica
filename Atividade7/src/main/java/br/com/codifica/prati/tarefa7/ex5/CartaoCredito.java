package br.com.codifica.prati.tarefa7.ex5;

public class CartaoCredito extends FormaPagamento {
    private final String numeroCartao;
    private final String nomeTitular;

    public CartaoCredito(String numeroCartao, String nomeTitular) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        System.out.println("Validando Cartão de Crédito...");
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número do cartão de crédito inválido. Deve conter 16 dígitos.");
        }
        if (nomeTitular == null || nomeTitular.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Nome do titular não pode ser vazio.");
        }
        System.out.println("Cartão de Crédito válido.");
    }
}