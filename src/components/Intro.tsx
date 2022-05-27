import React from 'react';
import { Footer } from './Footer';
import styles from '../../public/styles/Intro.module.css';

export const Intro = () => {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.intro__wrapper}>
          <div className={styles.intro__header}>
            <h1 className={styles.intro__hello}>Hello,</h1>
            <h1 className={styles.intro__name}>I'm Patrycja Panasiuk</h1>
            <h2 className={styles.intro__dev}>frontend and UX/UI enthusiast</h2>
            <a href='about-me' className={styles.intro__btn}>Get to know me!</a>
            <img className={styles.intro__img} src="./profile-3d-contrib/profile-gitblock.svg" alt="" />
          </div>
        </div>
        <div className={styles.intro__footer}><Footer /></div>
      </section>
    </>
  )
}
