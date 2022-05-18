import React from 'react';
import styles from '../../../../public/styles/About.module.css';

export const AboutMe = () => {
  return (
    <section className={styles.aboutComp}>
      <div className={styles.aboutComp__wrapper}>
        <img className={styles.aboutComp__img} src="images/myself.jpg" alt="me" />
        <article className={styles.aboutComp__text}>
          <h1>Who am I?</h1>
          <p>Hello, I am Patrycja from Poland. I am UI/UX and frontend enthusiast. By education I am a civil engineer and landscape architect</p>
          <p> In 2019 I has started learning programming. It was when I began noticing how <b>automation speeds up my work and improves efficiency.</b></p>
          <p>In 2020, I created a brand of house designs for sale from scratch. I was trying to play the role of my potential clients and I realized how important it is to <b>present information in a simple and intuitive way.</b></p>
          <p>This is how my career path has began turning into frontend development.</p>
        </article>
      </div>
    </section>
  )
}