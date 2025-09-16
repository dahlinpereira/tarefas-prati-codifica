import { FaShoppingCart, FaSun, FaMoon, FaStore } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';

export const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex h-16 items-center justify-between bg-slate-50/80 px-6 shadow-sm backdrop-blur-sm dark:bg-gray-800/80 dark:border-b dark:border-gray-700">
      <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-slate-100">
        <img src={logo} alt="Mini Loja Logo" className="h-8" />
        <span>Mini Loja</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-gray-600 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:bg-gray-700 dark:ring-offset-gray-800"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <button 
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-xl text-gray-600 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:bg-gray-700 dark:ring-offset-gray-800"
          aria-label={`Carrinho com ${cartItemCount} itens`}
        >
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};