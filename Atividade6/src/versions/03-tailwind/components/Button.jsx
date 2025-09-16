import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'w-full',
    'px-4 py-2',
    'text-base font-bold',
    'rounded-lg',
    'transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'dark:ring-offset-gray-800', // Offset do focus ring no dark mode
    'disabled:cursor-not-allowed disabled:opacity-65',
  ],
  {
    variants: {
      variant: {
        solid: [
          'bg-blue-600 text-white border-transparent',
          'hover:bg-blue-700',
          'dark:bg-blue-500 dark:hover:bg-blue-600',
          'focus-visible:ring-blue-500',
        ],
        outline: [
          'bg-transparent border border-blue-600 text-blue-600',
          'hover:bg-blue-600 hover:text-white',
          'dark:border-blue-500 dark:text-blue-500',
          'dark:hover:bg-blue-500 dark:hover:text-white',
          'focus-visible:ring-blue-500',
        ],
        ghost: [
          'bg-transparent text-blue-600',
          'hover:bg-blue-100',
          'dark:text-blue-400 dark:hover:bg-blue-500/20',
          'focus-visible:ring-blue-500',
        ],
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  }
);

export const Button = ({ children, variant, disabled, className, ...props }) => {
  return (
    <button className={buttonStyles({ variant, className })} disabled={disabled} {...props}>
      {children}
    </button>
  );
};