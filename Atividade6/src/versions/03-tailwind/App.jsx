import { useTheme } from '../../hooks/useTheme';
import { useProductLoader } from '../../hooks/useProductLoader';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Skeleton } from './components/Skeleton';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { loading, products } = useProductLoader();

  return (
    // O fundo do body já é controlado pelo dark mode do Tailwind no <html>
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartItemCount={3} />
      <main className="pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
    </>
  );
}

export default App;