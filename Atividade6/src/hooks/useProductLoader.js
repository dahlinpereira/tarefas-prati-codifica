import { useState, useEffect } from 'react';
import { productData } from '../data/products';

export const useProductLoader = (delay = 1500) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productData);
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { loading, products };
};