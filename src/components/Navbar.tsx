import React, {useState, useEffect} from 'react';
import styles from '../../public/styles/Navbar.module.css';
import { NavbarProps } from '../types';
import { useRouter } from 'next/router';

export const Navbar = ({ mobileMenu, setMobileMenu, isTablet }:NavbarProps) => {

  const [active, setActive] = useState<string>('home');

  const router = useRouter();
  const page = router.pathname;

  useEffect (() => {
    setActive(page);
  }, [active])
  
  const openMobileMenu = () => {
    return setMobileMenu(!mobileMenu);
  }

  if(isTablet){
    return (
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={active === '/' ? styles.nav__active : ''}><a href="/">home</a></li>
          <li className={active === '/about-me' ? styles.nav__active : ''}><a href="/about-me">about me</a></li>
          <li className={active === '/projects' ? styles.nav__active : ''}><a href="/projects">projects</a></li>
          <li className={active === '/contact' ? styles.nav__active : ''}><a href="/contact">contact</a></li>
        </ul>
        <section className={styles.nav__container}>
          <img src='images/github.png' alt="github" className={styles.nav__icon}/>
          <img src='images/linkedin.png' alt="linkedin" className={styles.nav__icon}/>
          <img src='images/instagram.png' alt="instagram" className={styles.nav__icon}/>
        </section>
      </nav>
    )
  }
  return (
    <nav className={styles.nav}>
      <button onClick={openMobileMenu}><img src={`images/${mobileMenu === false ? 'burger.png' : 'close.png'}`} alt="menu" className={styles.nav__burger}/></button>
      <section className={styles.nav__container}>
        <img src='images/github.png' alt="github" className={styles.nav__icon}/>
        <img src='images/linkedin.png' alt="linkedin" className={styles.nav__icon}/>
        <img src='images/instagram.png' alt="instagram" className={styles.nav__icon}/>
      </section>
    </nav>
  )
}
