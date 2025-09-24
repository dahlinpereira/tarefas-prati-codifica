package br.com.codifica.prati.tarefa7.ex7;

import java.util.List;
import java.util.Optional;

public interface IRepository<T extends Identificavel<ID>, ID> {
    void salvar(T entidade);
    Optional<T> buscarPorId(ID id);
    List<T> listarTodos();
    void remover(ID id) throws EntidadeNaoEncontradaException;
}