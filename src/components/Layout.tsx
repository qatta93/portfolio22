import React, { useEffect } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import styles from '../../public/styles/Layout.module.css';

export const Layout = ({ children }) => {



  if (typeof window !== "undefined") {

    const [vh, setVh] = React.useState(0);
    React.useEffect(() => {
      setVh(window.innerHeight * 0.01);
    });

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}><Navbar /></nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}><Footer /></footer>
    </div>
  )
}
