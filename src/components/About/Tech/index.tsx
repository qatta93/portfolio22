import React from 'react';
import styles from '../../../../public/styles/About.module.css';
import 'react-vertical-timeline-component/style.min.css';

export const Tech = () => {
  return (
    <section className={styles.aboutComp}>
      <div className={`${styles.aboutComp__wrapper} ${styles.aboutComp__wrapperTech}`}>
        <img className={`${styles.aboutComp__img} ${styles.aboutComp__imgTech}`} src="images/tech.jpg" alt="tech" />
        <article className={`${styles.aboutComp__text} ${styles.aboutComp__textTech}`}>
          <h1 >Tech Stack</h1>
          <p>My programming adventure has began in 2019. I have around a year of commercial experience.</p>
          <p>In the future, I would like to create an application that generates automatic house cost estimates based on databases from contractors. Potential investors would design houses in 3D, almost like in The Sims! I was thinking of using Rhinoceros 3D, Grasshopper, C#, Shapediver and JavaScript for this purpose </p>
          <div className={styles.aboutComp__tech}>
            <h2>FRONTEND</h2>
            <div className={styles.aboutComp__icons}>
              <img src="images/html.png" alt="html" />
              <img src="images/css-3.png" alt="css" />
              <img src="images/js.png" alt="js" />
              <img src="images/three.png" alt="three" />
              <img src="images/React.png" alt="react" />
              <img src="images/typescript.png" alt="typescript" />
              <img src="images/Redux.png" alt="redux" />
              <img src="images/nextjs.png" alt="nextjs" />
            </div>
          </div>
          <div className={styles.aboutComp__tech}>
            <h2>BACKEND</h2>
            <div className={styles.aboutComp__icons}>
              <img src="images/nodejs.png" alt="nodejs" />
              <img src="images/express.png" alt="express" />
              <img src="images/mongodb.png" alt="mongodb" />
              <img src="images/PostgreSQL.jpeg" alt="postgresql" />
    
            </div>
          </div>
          <div className={styles.aboutComp__tech}>
            <h2>TOOLS AND TECHNOLOGIES</h2>
            <div className={styles.aboutComp__icons}>
              <img src="images/figma.png" alt="figma" />
              <img src="images/Heroku.png" alt="heroku" />
              <img src="images/vercel.png" alt="vercel" />
              <img src="images/docker.png" alt="docker" />
              <img src="images/AE.png" alt="AE" />
              <img src="images/jest.png" alt="jest" />
              <img src="images/github-black.png" alt="github" />
              <img src="images/mocha.png" alt="mocha" />
              <img src="images/postman.png" alt="postman" />
              <img src="images/visual.png" alt="visual" />
            </div>
          </div>
          <div className={styles.aboutComp__github}>
            <h1 >Github contributions:</h1>
            <img src="https://raw.githubusercontent.com/qatta93/qatta93/master/profile-3d-contrib/profile-south-season-animate.svg" alt="github" />
          </div>
        </article>
      </div>
    </section>
  )
}