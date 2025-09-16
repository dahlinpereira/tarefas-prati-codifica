export const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-line" style={{ width: '90%', height: '1.2em', marginBottom: '12px' }}></div>
        <div className="skeleton-line" style={{ width: '70%', height: '1.2em', marginBottom: '24px' }}></div>
        <div className="skeleton-line" style={{ width: '40%', height: '1em', marginBottom: '16px' }}></div>
        <div className="skeleton-line" style={{ width: '50%', height: '1.5em', marginTop: 'auto', marginBottom: '20px' }}></div>
        <div className="skeleton-line" style={{ width: '100%', height: '40px', marginBottom: '0' }}></div>
      </div>
    </div>
  );
};