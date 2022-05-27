import React from 'react';
import styles from '../../../../public/styles/About.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export const AboutMe = () => {
  return (
    <section className={styles.aboutComp}>
      <div className={styles.aboutComp__wrapper}>
        <img className={styles.aboutComp__img} src="images/myself.jpg" alt="me" />
        <article className={styles.aboutComp__text}>
          <h1>Who am I?</h1>
          <p>Hello, I am Patrycja from Poland.
          Passionate about frontend development and UX/UI. I have started learning coding in 2019. It was when I had began noticing how <b>automation speeds up my work and improves efficiency. </b> 
          I created a brand of house designs for sale from scratch. I was trying to play the role of my potential clients and I realized how important it is to <b>present information in a simple and intuitive way. </b>
          This is how my career path has began turning into frontend development.</p>
          <p>As I am an <b>architect</b> - 
          I know 3D modeling, design tools and have aesthetic sense. <b>Civil engineering</b> taught me how to solve problems and think analytically. I love psychology and self-development.</p>
          <p>I am a traveler who has seen many faces of humanity and can be empathetic, ​​which helps in UX designing.</p>
          Besides the above, I bring a cake to the office and, as I used to be a professional player, I always persuade my colleagues to play volleyball together :)   
        </article>
        </div>
        <article className={styles.aboutComp__timeline}>
          <h1 className={styles.aboutComp__timeline__header}>TIMELINE:</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - present"
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
              date="2021-2022"
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
              date="2021"
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
              date="2020-2021"
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
              date="2015-2020"
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
              date="2013-2019"
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
              date="2012-2016"
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
    </section>
  )
}