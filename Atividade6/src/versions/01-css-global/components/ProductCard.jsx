import { FaStar } from 'react-icons/fa';
import { Button } from './Button';

export const ProductCard = ({ product }) => {
  const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="product-card-image"
          loading="lazy"
        />
        {product.tag && (
          <span className={`product-card-tag ${product.tag.toLowerCase()}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <div className="product-card-rating" aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <FaStar />
          <span>{product.rating}</span>
        </div>
        <p className="product-card-price">{formatPrice(product.price)}</p>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};