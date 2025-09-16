import { FaStar } from 'react-icons/fa';
import { Button } from './Button';

export const ProductCard = ({ product }) => {
  const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;
  
  const tagClasses = {
    'Novo': 'bg-green-500 text-white',
    'Promo': 'bg-yellow-400 text-gray-900',
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-slate-50 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="relative aspect-square bg-gray-200 dark:bg-gray-700">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {product.tag && (
          <span className={`absolute top-4 left-4 rounded-md px-2 py-1 text-sm font-bold ${tagClasses[product.tag]}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-grow flex-col p-4">
        <h3 className="h-[2.8em] text-base font-bold leading-tight text-gray-800 line-clamp-2 dark:text-slate-100">
          {product.title}
        </h3>
        <div className="my-2 flex items-center gap-1 text-yellow-500" aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <FaStar />
          <span className="font-semibold text-gray-600 dark:text-gray-400">{product.rating}</span>
        </div>
        <p className="mt-auto mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {formatPrice(product.price)}
        </p>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};