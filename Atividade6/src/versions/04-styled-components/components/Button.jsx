import styled, { css } from 'styled-components';

const getVariantStyles = ({ theme, variant = 'solid' }) => {
  switch (variant) {
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          opacity: 0.1;
        }
      `;
    case 'solid':
    default:
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primaryHover};
        }
      `;
  }
};

const StyledButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
  
  /* Aplica os estilos da variante */
  ${(props) => getVariantStyles(props)}
`;

export const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};