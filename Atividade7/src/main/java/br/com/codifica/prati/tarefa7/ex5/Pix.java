package br.com.codifica.prati.tarefa7.ex5;

public class Pix extends FormaPagamento {
    private final String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        System.out.println("Validando Chave Pix...");
        // Validação simplificada: apenas verifica se não é nula ou vazia.
        if (chavePix == null || chavePix.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Chave Pix não pode ser nula ou vazia.");
        }
        System.out.println("Chave Pix válida.");
    }
}