import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { MenuMobile } from './MenuMobile';
import styles from '../../public/styles/Layout.module.css';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [vh, setVh] = React.useState(0);
  const [width, setWidth] = useState<number>(0);
  
  const handleResize = () => setWidth(window.innerWidth);
  const isTablet = 767 < width;

  if (typeof window !== "undefined") {
    useEffect(() => {
      setVh(window.innerHeight * 0.01);
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      () => window.removeEventListener('resize', handleResize);
    }, [width]);
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}><Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} isTablet={isTablet} /></nav>
      {mobileMenu === false ? <main className={styles.main}>{children}</main> : <MenuMobile/>}
    </div>
  )
}
