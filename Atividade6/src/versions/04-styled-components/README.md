# Versão 4: Styled-Components

Esta versão implementa a interface utilizando a biblioteca CSS-in-JS [styled-components](https://styled-components.com/).

## Características

- **CSS-in-JS:** Os estilos são escritos em template literals de JavaScript (`styled.div` ``) dentro dos arquivos de componente, criando componentes React com estilos encapsulados.
- **ThemeProvider:** Um `<ThemeProvider>` envolve a aplicação, fornecendo um objeto de tema (com cores, espaçamentos, etc.) a todos os componentes estilizados. Isso torna a implementação de temas (claro/escuro) trivial.
- **Props Dinâmicas:** Os estilos podem ser alterados dinamicamente com base nas props passadas para o componente (ex: `<Button variant="outline">`).
- **Escopo Automático:** Assim como CSS Modules, os estilos são automaticamente escopados para o componente, eliminando conflitos de classe.