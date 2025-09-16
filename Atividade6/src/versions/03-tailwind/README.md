# Versão 3: Tailwind CSS

Esta versão implementa a interface utilizando o framework "utility-first" [Tailwind CSS](https://tailwindcss.com/).

## Características

- **Utility-First:** A estilização é feita aplicando classes utilitárias diretamente no JSX (ex: `flex`, `p-4`, `text-lg`). Não há arquivos CSS de componente dedicados.
- **Configuração de Tema:** Os tokens de design (cores, fontes) são definidos no arquivo `tailwind.config.js`, customizando o conjunto de utilitários padrão do framework.
- **Dark Mode:** Utiliza a estratégia `class` do Tailwind. O `useTheme` hook adiciona/remove a classe `dark` do elemento `<html>`, e o Tailwind aplica automaticamente os estilos prefixados com `dark:` (ex: `dark:bg-gray-800`).
- **Responsividade:** Os breakpoints são aplicados diretamente nas classes com prefixos responsivos (ex: `md:grid-cols-3`).