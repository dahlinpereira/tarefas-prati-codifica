import { FaStar } from 'react-icons/fa';
import { Button } from './Button';
import styles from './ProductCard.module.css';

export const ProductCard = ({ product }) => {
  const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        {product.tag && (
          <span className={`${styles.tag} ${styles[product.tag.toLowerCase()]}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.rating} aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <FaStar />
          <span>{product.rating}</span>
        </div>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};