import React from 'react';
import styles from '../../public/styles/Footer.module.css';

export const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className={styles.footer}>© Patrycja Panasiuk {year}</div>
  )
}
