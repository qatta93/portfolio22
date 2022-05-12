import React from 'react';
import styles from '../../public/styles/MenuMobile.module.css';

export const MenuMobile = () => {
  return (
    <main className={styles.menuMobile}>
      <a href="/about-me">ABOUT ME</a>
      <a href="/projects">PROJECTS</a>
      <a href="/contact">CONTACT</a>
      <a href="/">HOME</a>
    </main>
  )
}
