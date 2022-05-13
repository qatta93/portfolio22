import React, {useState} from 'react';
import { SectionHeader } from '../SectionHeader';
import { AboutMe } from './AboutMe';
import { Hobbies } from './Hobbies';
import { Tech } from './Tech';
import styles from '../../../public/styles/About.module.css';

export const About = () => {
  const [sectionId, setSectionId] = useState<number>(1);

  const showSection = (id:number) => {
    return setSectionId(id);
  }

  return (
    <section className={styles.about}>
      <SectionHeader title={'About me'} />
      <div className={styles.about__buttons}>
        <button className={sectionId === 1 ? styles.about__btnSelected : styles.about__btn} onClick={() => showSection(1)}>
          <h1>Who am I?</h1>
          <p>About the person I have become.</p>
        </button>
        <button className={sectionId === 2 ? styles.about__btnSelected : styles.about__btn} onClick={() => showSection(2)}>
          <h1>Hobbies & Dreams</h1>
          <p>The things that make me feel alive.</p>
        </button>
        <button className={sectionId === 3 ? styles.about__btnSelected : styles.about__btn} onClick={() => showSection(3)}>
          <h1>Tech Stack & Experience</h1>
          <p>A few words about my skills.</p>
        </button>
      </div>
      {sectionId === 1 ? <AboutMe/> : null}
      {sectionId === 2 ? <Hobbies /> : null}
      {sectionId === 3 ? <Tech /> : null}
    </section>
  )
}
