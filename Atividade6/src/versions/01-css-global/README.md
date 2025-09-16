# Versão 1: CSS Global

Esta versão implementa a interface da "Mini Loja" utilizando uma única folha de estilos global (`styles.css`).

## Características

- **Tokens de Design:** As cores, espaçamentos e sombras são gerenciados por Variáveis CSS (`:root`).
- **Theming:** O modo escuro é ativado aplicando um atributo `data-theme="dark"` no elemento `<html>`, que sobrescreve as variáveis de cor.
- **Nomenclatura:** Utiliza uma convenção de nomenclatura BEM-like (ex: `product-card__title`) para mitigar o risco de conflitos de classe.