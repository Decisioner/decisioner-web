import React from 'react';
import styles from './InitLoader.module.css';

const InitLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
};

export default InitLoader;
