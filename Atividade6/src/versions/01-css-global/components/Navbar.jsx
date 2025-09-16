import { FaShoppingCart, FaSun, FaMoon, FaStore } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';

export const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Mini Loja Logo" style={{ height: '32px' }} />
        <span>Mini Loja</span>
      </div>
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <button className="cart-badge" aria-label={`Carrinho com ${cartItemCount} itens`}>
          <FaShoppingCart />
          {cartItemCount > 0 && <span className="cart-badge-count">{cartItemCount}</span>}
        </button>
      </div>
    </header>
  );
};