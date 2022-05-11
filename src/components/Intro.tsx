import React from 'react';
import styles from '../../public/styles/Intro.module.css';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__header}>
        <h1 className={styles.intro__hello}>Hello,</h1>
        <h1 className={styles.intro__name}>I'm Patrycja Panasiuk</h1>
        <h2 className={styles.intro__dev}>frontend and UX/UI enthusiast</h2>
      </div>
      <div className={styles.intro_animation}>
        
      </div>
    </section>
  )
}
