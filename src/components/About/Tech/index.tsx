import React from 'react';
import styles from '../../../../public/styles/About.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Tech = () => {
  return (
    <section className={styles.aboutComp}>
      <div className={`${styles.aboutComp__wrapper} ${styles.aboutComp__wrapperTech}`}>
        <img className={`${styles.aboutComp__img} ${styles.aboutComp__imgTech}`} src="images/tech.jpg" alt="tech" />
        <article className={`${styles.aboutComp__text} ${styles.aboutComp__textTech}`}>
          <h1 >Tech Stack & Experience</h1>
          <p>My programming adventure has began in 2019. I have around a year of commercial experience.</p>
          <p>In the future, I would like to create an application that generates automatic house cost estimates based on databases from contractors. Potential investors would design houses in 3D, almost like in The Sims! I was thinking of using Rhinoceros 3D, Grasshopper, C#, Shapediver and JavaScript for this purpose </p>
          <div className={styles.aboutComp__tech}>
            <h2>FRONTEND</h2>
            <div className={styles.aboutComp__icons}>
              <img src="images/html.png" alt="html" />
              <img src="images/css-3.png" alt="css" />
              <img src="images/js.png" alt="js" />
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
              <img src="images/docker.png" alt="docker" />
              <img src="images/AE.png" alt="AE" />
              <img src="images/jest.png" alt="jest" />
              <img src="images/github-black.png" alt="github" />
              <img src="images/mocha.png" alt="mocha" />
              <img src="images/postman.png" alt="postman" />
              <img src="images/visual.png" alt="visual" />
            </div>
          </div>
        </article>
        <article className={styles.aboutComp__timeline}>
          <h1 className={styles.aboutComp__timeline__header}>TIMELINE:</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="01.2022 - present"
              iconStyle={{ background: 'var(--yellow)' }}
            >
              <h3 className="vertical-timeline-element-title">Full-Stack JavaScript Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">{`</salt>`}</h4>
              <h4 className="vertical-timeline-element-subtitle">Oslo, Norway</h4>
              <p>
              Technical skills include JavaScript, React, Typescript, Node.js, Express, HTML5, CSS3, Databases incl. MongoDB and PostgreSQL, UX/UI and general development tools such as Git, REST, Docker, Kubernetes, Redux, GraphQL, AWS, TDD and CI/CD.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="09.2021 - 02.2022"
              iconStyle={{ background: 'white' }}
            >
              <h3 className="vertical-timeline-element-title">Leadership training workshop</h3>
              <h4 className="vertical-timeline-element-subtitle">online</h4>
              <p>
              EU program - practical course that increases soft skills and improves teamwork (100h).
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="06.2021-01.2022"
              iconStyle={{ background: '#efeff0' }}
            >
              <h3 className="vertical-timeline-element-title">Civil Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">self-employed</h4>
              <h4 className="vertical-timeline-element-subtitle">Warsaw, Poland</h4>
              <p>
                Architectural and structural engineering consulting.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="06.2020-08.2021"
              iconStyle={{ background: '#efeff0' }}
            >
              <h3 className="vertical-timeline-element-title">Architect / Brand manager</h3>
              <h4 className="vertical-timeline-element-subtitle">Akrobud</h4>
              <h4 className="vertical-timeline-element-subtitle">Warsaw, Poland</h4>
              <p>
              I created a brand of a company selling prefabricated houses. I did everything from scratch - the name, logo, projects, business model etc. I was researching a market, looking for new solutions and trying to play the role of my potential clients. 
              I sold 4 houses after a few months of creating the company. I realized how important is to present information in a simple and intuitive way (UX/UI). I designed and coded a website (HTML, CSS, JS, PHP, ADOBE XD). 
              I was planning to do 3D configurator in the future to make the website more automated and user friendly.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="01.2015-06.2020"
              iconStyle={{ background: '#efeff0' }}
            >
              <h3 className="vertical-timeline-element-title">Architect / Civil Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Germany, The UK, Poland</h4>
              <p>
                Working as an engineer in international projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10.2013-02.2019"
              iconStyle={{ background: 'white' }}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Civil Engineering</h3>
              <h3 className="vertical-timeline-element-title">Lublin University of Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">Lublin, Poland</h4>
              <p>
                Activities and societies: During my studies I was a year-representative and I got a scholarship.
                Diploma thesis topic: "The structural project of a self-sufficient timber frame house on "Rajska" island in BIM technology". 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10.2012-07.2016"
              iconStyle={{ background: 'white' }}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Landscape Architecture</h3>
              <h3 className="vertical-timeline-element-title">University of Life Sciences</h3>
              <h4 className="vertical-timeline-element-subtitle">Lublin, Poland</h4>
              <p>
              Specialisation: Parks and gardens.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </article>
      </div>
    </section>
  )
}