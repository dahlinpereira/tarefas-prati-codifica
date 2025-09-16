import styled from 'styled-components';
import { FaShoppingCart, FaSun, FaMoon, FaStore } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: background-color ${({ theme }) => theme.transition}, border-color ${({ theme }) => theme.transition};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: ${({ theme }) => theme.font.weights.bold};
`;

const LogoImage = styled.img`
  height: 32px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: background-color ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CartBadgeCount = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.font.weights.bold};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <Header>
      <Logo>
        <LogoImage src={logo} alt="Mini Loja Logo" />
        <span>Mini Loja</span>
      </Logo>
      <Actions>
        <IconButton
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </IconButton>
        <IconButton aria-label={`Carrinho com ${cartItemCount} itens`}>
          <FaShoppingCart />
          {cartItemCount > 0 && <CartBadgeCount>{cartItemCount}</CartBadgeCount>}
        </IconButton>
      </Actions>
    </Header>
  );
};