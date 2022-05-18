import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { ContactForm } from './ContactForm';
import { Footer } from '../Footer';
import styles from '../../../public/styles/Contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <SectionHeader title={'Contact'} />
      <section className={styles.contact__container}>
        <div className={styles.contact__wrapper}>
          <p>Are you interested in working with me?</p>
          <p>Do not hesitate to drop a message!</p>
          <p>I don't bite :)</p>
        </div>
        <ContactForm />
      </section>
      <div className={styles.contact__footer}><Footer /></div>
    </div>
  )
}
