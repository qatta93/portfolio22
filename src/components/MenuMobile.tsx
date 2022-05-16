import React from 'react';
import styles from '../../public/styles/MenuMobile.module.css';
import { Footer } from './Footer';

export const MenuMobile = () => {
  return (
    <>
      <main className={styles.menuMobile}>
        <a href="/about-me">ABOUT ME</a>
        <a href="/projects">PROJECTS</a>
        <a href="/contact">CONTACT</a>
        <a href="/">HOME</a>
      </main>
      <div className={styles.intro__footer}><Footer /></div>
    </>
  )
}
