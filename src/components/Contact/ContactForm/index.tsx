import React, {useState} from 'react';
import styles from '../../../../public/styles/ContactForm.module.css';

const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // const handleSubmit = () => {
  //   setTimeout(() => {
  //     setSubmitted(true);
  //   }, 100);
  // };


    async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
  

          const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
            email: event.target.email.value,
            message: event.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
        console.log(result);
    }}

    if (isSubmitted) {
    return (
      <section className={styles.form__response}>
        <p>Thank you!</p>
        <p>I'll be in touch soon.</p>
        <img src={'/images/sent.png'} alt={'Email was sent'} className={styles.contact__img}/>
      </section>
    );
  }

  return (
    <form
    onSubmit={handleSubmit}
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
