export const Button = ({ children, variant = 'solid', disabled = false, ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  return (
    <button className={`${baseClass} ${variantClass}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};