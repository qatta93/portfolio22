import React, { useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { MenuMobile } from './MenuMobile';
import styles from '../../public/styles/Layout.module.css';

export const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  if (typeof window !== "undefined") {
    const [vh, setVh] = React.useState(0);
    React.useEffect(() => {
      setVh(window.innerHeight * 0.01);
    });
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}><Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} /></nav>
      {mobileMenu === false ? <main className={styles.main}>{children}</main> : <MenuMobile/>}
      <footer className={styles.footer}><Footer /></footer>
    </div>
  )
}
