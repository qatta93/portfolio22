import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { MenuMobile } from './MenuMobile';
import styles from '../../public/styles/Layout.module.css';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth] = React.useState<number>(0);

  const isTablet = 767 < width;
  const isPhone = 520 > width;

  if (typeof window !== "undefined") {
    const [vh, setVh] = React.useState(0);
    React.useEffect(() => {
      setVh(window.innerHeight * 0.01);
      setWidth(window.innerWidth);
    }, [window.innerWidth]);
      if(isPhone && width !== 0){
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
  }

  console.log(width);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}><Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} isTablet={isTablet}/></nav>
      {mobileMenu === false ? <main className={styles.main}>{children}</main> : <MenuMobile/>}
    </div>
  )
}
