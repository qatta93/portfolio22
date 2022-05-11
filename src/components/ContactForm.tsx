import React, {useState} from 'react';
import styles from '../../public/styles/ContactForm.module.css';

const FORM_ENDPOINT = "";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
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
      >
        send
      </button>
  </form>
  )
}
