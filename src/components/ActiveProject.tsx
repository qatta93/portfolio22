import React from 'react';
import styles from '../../public/styles/ActiveProject.module.css';

export const ActiveProject = ({ project, setActiveProject }) => {

  const technologies = project[0].tech.toString().replace(/,/g, ' | ');
  const closeProject = () => setActiveProject(null);

  return (
    <section className={styles.activeProject}>
      <img className={styles.activeProject__img} src="images/close-white.png" alt="close" onClick={() => closeProject()}/>
      <h1 className={styles.activeProject__name}>{project[0].name}</h1>
      <h2 className={styles.activeProject__tech}>{technologies}</h2>
      <p className={styles.activeProject__desc}>{project[0].description}</p>
      <div className={styles.activeProject__links}>
        <h3 className={styles.activeProject__header}>LINKS:</h3>
        {project[0].links.map((link, i) => <a className={styles.activeProject__link} href={project[0].url[i]}>{link}</a>)}
      </div>
    </section>
  )
}
