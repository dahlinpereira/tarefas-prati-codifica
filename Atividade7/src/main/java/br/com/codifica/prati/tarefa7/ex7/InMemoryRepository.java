package br.com.codifica.prati.tarefa7.ex7;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> bancoDeDados = new ConcurrentHashMap<>();

    @Override
    public void salvar(T entidade) {
        bancoDeDados.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return Optional.ofNullable(bancoDeDados.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return Collections.unmodifiableList(new ArrayList<>(bancoDeDados.values()));
    }

    @Override
    public void remover(ID id) throws EntidadeNaoEncontradaException {
        if (!bancoDeDados.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Não foi encontrada entidade com o ID: " + id);
        }
        bancoDeDados.remove(id);
    }
}