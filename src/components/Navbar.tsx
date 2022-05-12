import React from 'react';
import styles from '../../public/styles/Navbar.module.css';
import { NavbarProps } from '../types';

export const Navbar = ({ mobileMenu, setMobileMenu }:NavbarProps) => {

  const openMobileMenu = () => {
    return setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={styles.nav} id={styles.mynav}>
      <button onClick={openMobileMenu}><img src={`images/${mobileMenu === false ? 'burger.png' : 'close.png'}`} alt="menu" className={styles.nav__burger}/></button>
      <section className={styles.nav__container}>
        <img src='images/github.png' alt="github" className={styles.nav__icon}/>
        <img src='images/linkedin.png' alt="linkedin" className={styles.nav__icon}/>
        <img src='images/instagram.png' alt="instagram" className={styles.nav__icon}/>
      </section>
    </nav>
  )
}
