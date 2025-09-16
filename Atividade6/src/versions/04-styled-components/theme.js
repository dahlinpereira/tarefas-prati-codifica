const baseTokens = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  font: {
    family: "'Inter', sans-serif",
    weights: {
      normal: 400,
      bold: 700,
    },
    sizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
    }
  }
};

export const lightTheme = {
  ...baseTokens,
  colors: {
    primary: '#007bff',
    primaryHover: '#0056b3',
    text: '#333',
    background: '#ffffff',
    surface: '#f8f9fa',
    border: '#dee2e6',
    white: '#fff',
    success: '#28a745',
    warning: '#ffc107',
    warningText: '#333',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  }
};

export const darkTheme = {
  ...baseTokens,
  colors: {
    primary: '#3b82f6',
    primaryHover: '#60a5fa',
    text: '#e5e7eb',
    background: '#111827',
    surface: '#1f2937',
    border: '#374151',
    white: '#fff',
    success: '#28a745',
    warning: '#ffc107',
    warningText: '#333',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.2)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
  }
};