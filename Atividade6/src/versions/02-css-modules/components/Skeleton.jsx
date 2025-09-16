import styles from './Skeleton.module.css';

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.line} style={{ width: '90%', height: '1.2em', marginBottom: '12px' }}></div>
        <div className={styles.line} style={{ width: '70%', height: '1.2em', marginBottom: '24px' }}></div>
        <div className={styles.line} style={{ width: '40%', height: '1em', marginBottom: '16px' }}></div>
        <div className={styles.line} style={{ width: '50%', height: '1.5em', marginTop: 'auto', marginBottom: '20px' }}></div>
        <div className={styles.line} style={{ width: '100%', height: '40px', marginBottom: '0' }}></div>
      </div>
    </div>
  );
};