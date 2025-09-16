import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { useProductLoader } from '../../hooks/useProductLoader';
import { lightTheme, darkTheme } from './theme';
import styled from 'styled-components';

import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Skeleton } from './components/Skeleton';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.family};
    margin: 0;
    padding-top: 80px;
    transition: background-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


function App() {
  const { theme, toggleTheme } = useTheme();
  const { loading, products } = useProductLoader();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Navbar theme={theme} toggleTheme={toggleTheme} cartItemCount={3} />
      <main>
        <ProductGrid>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </ProductGrid>
      </main>
    </ThemeProvider>
  );
}

export default App;