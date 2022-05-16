import React, {useState} from 'react';
import styles from '../../../../public/styles/ContactForm.module.css';

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_HEROTOFU_URL;

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (!submitted) {
    return (
      <section className={styles.form__response}>
        <p>Thank you!</p>
        <p>I'll be in touch soon.</p>
      </section>
    );
  }

  return (
    <form
    action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST"
    target="_blank"
    className={styles.form}
  >
      <input
        type="text"
        placeholder="Your name"
        name="name"
        className={styles.form__input}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className={styles.form__input}
        required
      />
      <textarea
        placeholder="Tell me everything..."
        name="message"
        className={styles.form__textarea}
        required
      />
      <button
        className={styles.form__button}
        type="submit"
        value="Download CTA"
      >
        send
      </button>
  </form>
  )
}
