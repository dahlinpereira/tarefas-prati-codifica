package br.com.codifica.prati.tarefa7.ex7;

import br.com.codifica.prati.tarefa7.ex7.modelo.Funcionario;
import br.com.codifica.prati.tarefa7.ex7.modelo.Produto;

import java.util.Optional;

public class MainEx7 {
    public static void main(String[] args) {
        System.out.println("Demonstração do Exercício 7: Repositório Genérico\n");

        // --- Usando com a entidade Produto ---
        System.out.println("--- Repositório de Produtos (ID: Long) ---");
        IRepository<Produto, Long> repoProdutos = new InMemoryRepository<>();
        repoProdutos.salvar(new Produto(1L, "Monitor Ultrawide"));
        repoProdutos.salvar(new Produto(2L, "SSD NVMe 1TB"));

        System.out.println("Todos os produtos: " + repoProdutos.listarTodos());

        System.out.println("\nBuscando produto com ID 2:");
        Optional<Produto> produtoOpt = repoProdutos.buscarPorId(2L);
        produtoOpt.ifPresent(p -> System.out.println("Encontrado: " + p));
        
        System.out.println("\nBuscando produto com ID 99 (inexistente):");
        Optional<Produto> produtoInexistenteOpt = repoProdutos.buscarPorId(99L);
        System.out.println("Encontrado? " + produtoInexistenteOpt.isPresent());

        System.out.println("\nRemovendo produto com ID 1...");
        repoProdutos.remover(1L);
        System.out.println("Produtos restantes: " + repoProdutos.listarTodos());

        // --- Usando com a entidade Funcionario ---
        System.out.println("\n\n--- Repositório de Funcionários (ID: String) ---");
        IRepository<Funcionario, String> repoFuncionarios = new InMemoryRepository<>();
        repoFuncionarios.salvar(new Funcionario("F001", "Carlos"));
        repoFuncionarios.salvar(new Funcionario("F002", "Beatriz"));

        System.out.println("Todos os funcionários: " + repoFuncionarios.listarTodos());
        
        System.out.println("\nBuscando funcionário com matrícula F001:");
        repoFuncionarios.buscarPorId("F001").ifPresent(f -> System.out.println("Encontrado: " + f));

        System.out.println("\nTentando remover funcionário com matrícula F999 (inexistente):");
        try {
            repoFuncionarios.remover("F999");
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Exceção capturada: " + e.getMessage());
        }
    }
}