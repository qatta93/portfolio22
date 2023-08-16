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
              date="2023 - present"
              iconStyle={{ background: 'var(--yellow)' }}
            >
              <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">{`Adlife`}</h4>
              <h4 className="vertical-timeline-element-subtitle">Warsaw, Poland</h4>
              <ul>
                <li>creating Web Applications from scratch and developing existing ones with new functionalities using React and Redux in a scalable way</li>
                <li>collaborating with Project Managers, BE developers, BA, UX/UI (auditing UX design from a tech perspective and giving insights), and consultation with clients to deliver user-centered and highly performant Web App</li>
                <li>integrating B2C websites with headless CMS to allow content editors easily maintain a website</li>
                <li>actively participating in scrum meetings (backlog refinement, sprint planning, retro)</li>
                <li>considering SEO practices to enhance the website's search engine visibility</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2023"
              iconStyle={{ background: 'var(--yellow)' }}
            >
              <h3 className="vertical-timeline-element-title">Software Developer Consultant</h3>
              <h4 className="vertical-timeline-element-subtitle">{`SALT`}</h4>
              <h4 className="vertical-timeline-element-subtitle">Oslo, Norway (remote)</h4>
              <ul>
                <li>identifying and prioritizing the most crucial frontend features for the MVP based on user needs and business goals</li>
                <li>implementing complex design mockups and wireframes using Storybook, maintaining design fidelity and usability</li>
                <li>utilizing browser developer tools to diagnose and debug frontend issues, optimizing performance, and troubleshooting layout problems</li>
                <li>developing interactive elements using JavaScript and React, enhancing user engagement through animations, transitions, and real-time updates</li>
                <li>integrating with backend services by consuming RESTful APIs to fetch and display dynamic content</li>
                <li>participating in UI design and interactive prototypes to visualize and iterate on user interfaces, ensuring usability and efficiency before full development</li>
                <li>prioritizing responsive design across a range of devices (mobile first)</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              iconStyle={{ background: 'var(--yellow)' }}
            >
              <h3 className="vertical-timeline-element-title">Full-Stack JavaScript Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">{`</salt>`}</h4>
              <h4 className="vertical-timeline-element-subtitle">Stockholm, Sweden</h4>
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
              The entire program took 100 hours. It was divided into 5 practical modules: leader person, leadership communication, team leader, leadership tools and design tools. 
              The course was designed to increase soft skills and working in a team.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2022"
              iconStyle={{ background: '#efeff0' }}
            >
              <h3 className="vertical-timeline-element-title">Architect, Product Owner</h3>
              <h4 className="vertical-timeline-element-subtitle">self-employed</h4>
              <h4 className="vertical-timeline-element-subtitle">Warsaw, Poland</h4>
              <ul>
                <li>creating a brand of a company that sells prefabricated houses</li>
                <li>researching the market, looking for new solutions and taking into account the needs of customers</li>
                <li>constantly devising automation solutions (for instance - an online configurator in order to help clients with cost estimation)</li>
                <li>creating a website from scratch - from logo, graphic design to programming (Adobe XD, HTML, CSS, JavaScript, React)</li>
                <li>collaborating with clients and multidisciplinary teams</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2015-2029"
              iconStyle={{ background: '#efeff0' }}
            >
              <h3 className="vertical-timeline-element-title">Architect / Civil Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">New Zealand, England, Germany, Poland</h4>
              <ul>
                <li>creating mockups and 3D models with an aesthetic sense</li>
                <li>thinking analytically and solving engineering problems</li>
                <li>working with multicultural and multidisciplinary teams</li>
              </ul>
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