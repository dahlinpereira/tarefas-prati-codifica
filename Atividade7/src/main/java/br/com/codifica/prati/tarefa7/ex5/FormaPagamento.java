package br.com.codifica.prati.tarefa7.ex5;

import java.math.BigDecimal;

public abstract class FormaPagamento {

    // Método abstrato - cada subclasse DEVE implementar sua própria lógica de validação.
    public abstract void validarPagamento() throws PagamentoInvalidoException;

    // Método concreto - a lógica de processamento é compartilhada.
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        System.out.println("Iniciando processamento de pagamento de R$" + valor + "...");
        
        // Chama o método de validação, que será o da subclasse específica.
        validarPagamento();
        
        // Se a validação passar (não lançar exceção), o pagamento é confirmado.
        System.out.println("Pagamento de R$" + valor + " processado com sucesso via " + this.getClass().getSimpleName() + "!");
    }
}