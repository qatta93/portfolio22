import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { MenuMobile } from './MenuMobile';
import styles from '../../public/styles/Layout.module.css';
import { type } from 'os';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [vh, setVh] = React.useState(0);
  
  const handleResize = () => setWidth(window.innerWidth);
  const [width, setWidth] = useState<number>(0);
  const isTablet = (767 < width && width !==0);
  
  if (typeof window !== "undefined" && width === 0){
    const defaultWidth = window.innerHeight;
    setWidth(defaultWidth);
  }

  if (typeof window !== "undefined") {
    useEffect(() => {
      setVh(window.innerHeight * 0.01);
      window.addEventListener('resize', handleResize);
      () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }


  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}><Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} isTablet={isTablet} /></nav>
      {mobileMenu === false ? <main className={styles.main}>{children}</main> : <MenuMobile/>}
    </div>
  )
}
