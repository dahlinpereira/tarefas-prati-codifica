import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { Button } from './Button';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.border};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tag = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  color: ${({ theme, variant }) => variant === 'Promo' ? theme.colors.warningText : theme.colors.white};
  background-color: ${({ theme, variant }) => variant === 'Promo' ? theme.colors.warning : theme.colors.success};
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  line-height: 1.4;
  height: 2.8em;
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Price = styled.p`
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-weight: ${({ theme }) => theme.font.weights.bold};
`;

export const ProductCard = ({ product }) => {
  const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <CardWrapper>
      <ImageWrapper>
        <ProductImage src={product.imageUrl} alt={product.title} loading="lazy" />
        {product.tag && <Tag variant={product.tag}>{product.tag}</Tag>}
      </ImageWrapper>
      <Content>
        <Title>{product.title}</Title>
        <Rating aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <FaStar />
          <span>{product.rating}</span>
        </Rating>
        <Price>{formatPrice(product.price)}</Price>
        <Button variant="solid">Adicionar</Button>
      </Content>
    </CardWrapper>
  );
};