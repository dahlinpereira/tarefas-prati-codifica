import { useTheme } from '../../hooks/useTheme';
import { useProductLoader } from '../../hooks/useProductLoader';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Skeleton } from './components/Skeleton';
import './styles.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { loading, products } = useProductLoader();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartItemCount={3} />
      <main>
        <div className="product-grid">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
    </>
  );
}

export default App;