# Versão 2: CSS Modules

Esta versão implementa a interface utilizando [CSS Modules](https://github.com/css-modules/css-modules).

## Características

- **Escopo Local:** Cada componente tem seu próprio arquivo `.module.css`. Os nomes das classes são hasheados automaticamente durante o build (ex: `Button_btn__1a2b3c`), prevenindo conflitos de estilo.
- **Tokens de Design:** Continua utilizando Variáveis CSS definidas em um arquivo `globals.css` para manter a consistência e o theming.
- **Composição de Classes:** As classes são importadas como um objeto (`styles`) em JavaScript e aplicadas via `className={styles.minhaClasse}`, permitindo composição e lógica.