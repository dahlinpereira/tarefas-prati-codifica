import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    // Só permite voltar se não estiver na primeira página
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    // Só permite avançar se não estiver na última página
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Não renderiza nada se houver apenas uma página ou nenhuma
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  );
};

export default Pagination;