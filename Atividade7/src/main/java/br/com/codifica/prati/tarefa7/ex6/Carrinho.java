package br.com.codifica.prati.tarefa7.ex6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public final class Carrinho {
    private final List<ItemCarrinho> itens;
    private final BigDecimal porcentagemCupom;

    // Construtor para um carrinho novo e vazio
    public Carrinho() {
        this.itens = Collections.emptyList();
        this.porcentagemCupom = BigDecimal.ZERO;
    }

    // Construtor privado para as operações internas de "modificação"
    private Carrinho(List<ItemCarrinho> itens, BigDecimal porcentagemCupom) {
        // Cópia defensiva para garantir que a lista externa não possa ser modificada
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
        this.porcentagemCupom = porcentagemCupom;
    }

    public Carrinho adicionar(ItemCarrinho novoItem) {
        List<ItemCarrinho> novaLista = new ArrayList<>(this.itens);
        novaLista.add(novoItem);
        return new Carrinho(novaLista, this.porcentagemCupom);
    }

    public Carrinho remover(Produto produtoParaRemover) {
        List<ItemCarrinho> novaLista = this.itens.stream()
                .filter(item -> !item.getProduto().equals(produtoParaRemover))
                .collect(Collectors.toList());
        return new Carrinho(novaLista, this.porcentagemCupom);
    }
    
    public Carrinho aplicarCupom(BigDecimal porcentagem) {
        if (porcentagem.compareTo(BigDecimal.ZERO) < 0 || porcentagem.compareTo(new BigDecimal("30")) > 0) {
            throw new ValidacaoException("Cupom inválido. A porcentagem deve ser entre 0 e 30.");
        }
        return new Carrinho(this.itens, porcentagem);
    }

    public List<ItemCarrinho> getItens() {
        return itens; // Seguro retornar, pois é uma lista não modificável
    }

    public Dinheiro getValorTotal() {
        BigDecimal totalBruto = this.itens.stream()
                .map(item -> item.getSubtotal().getValor())
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        if (porcentagemCupom.compareTo(BigDecimal.ZERO) > 0) {
            BigDecimal fatorDesconto = BigDecimal.ONE.subtract(porcentagemCupom.divide(new BigDecimal("100")));
            BigDecimal totalLiquido = totalBruto.multiply(fatorDesconto);
            // Arredondamento bancário (HALF_EVEN)
            totalLiquido = totalLiquido.setScale(2, RoundingMode.HALF_EVEN);
            return new Dinheiro(totalLiquido, Moeda.BRL);
        }
        
        return new Dinheiro(totalBruto.setScale(2, RoundingMode.HALF_EVEN), Moeda.BRL);
    }
}