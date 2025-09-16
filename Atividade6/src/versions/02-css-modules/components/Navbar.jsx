import { FaShoppingCart, FaSun, FaMoon, FaStore } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '../../../assets/logo.svg';

export const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Mini Loja Logo" className={styles.logoImage} />
        <span>Mini Loja</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <button className={styles.cartBadge} aria-label={`Carrinho com ${cartItemCount} itens`}>
          <FaShoppingCart />
          {cartItemCount > 0 && <span className={styles.cartBadgeCount}>{cartItemCount}</span>}
        </button>
      </div>
    </header>
  );
};