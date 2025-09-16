import styles from './Button.module.css';

export const Button = ({ children, variant = 'solid', disabled = false, ...props }) => {
  const variantClass = styles[variant] || styles.solid;
  
  return (
    <button className={`${styles.btn} ${variantClass}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};