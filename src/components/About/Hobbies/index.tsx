import React from 'react';
import styles from '../../../../public/styles/About.module.css';

export const Hobbies = () => {
  return (
    <section className={styles.aboutComp}>
      <img className={styles.aboutComp__img} src="images/travel.jpg" alt="travel" />
      <article className={styles.aboutComp__text}>
        <h1>Hobbies & Dreams</h1>
        <p><b>Travelling, sports, psychology.</b> These 3 words are the most powerful for me.</p>
        <p>I have been to 35 countries on 4 continents so far. I would like to visit the whole World. Travelling gives me an opportunity of being aware of my own abilities as it pushes limits. It is a salvage from an ordinary life. It helps to show all facets of humanity. <b> One of my dreams is to volunteer in Africa.</b></p>
        <p>I have been doing sports since I can remember. <b> Let us have a game of table soccer or table tennis!</b></p>
        <p>I have always been interested in people and the genesis of their behavior.</p>
        <p>This is how my career path has began turning into frontend development.</p>
      </article>
    </section>
  )
}