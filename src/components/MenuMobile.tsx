import React from 'react';
import { Navbar } from './Navbar';
import styles from '../../public/styles/MenuMobile.module.css';

export const MenuMobile = () => {
  return (
    <main className={styles.menuMobile}>
      <a href="/about-me">ABOUT ME</a>
      <a href="/portfolio">PORTFOLIO</a>
      <a href="/contact">CONCTACT</a>
      <a href="/">HOME</a>
    </main>
  )
}
