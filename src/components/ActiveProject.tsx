import React from 'react';
import styles from '../../public/styles/ActiveProject.module.css';
import { ActiveProjectProps } from '../types';

export const ActiveProject = ({ project, setActiveProject }:ActiveProjectProps) => {

  const technologies = project.tech.toString().replace(/,/g, ' | ');
  const closeProject = () => setActiveProject(null);

  return (
    <section className={styles.activeProject}>
      <img className={styles.activeProject__img} src="images/close-white.png" alt="close" onClick={() => closeProject()}/>
      <h1 className={styles.activeProject__name}>{project.name}</h1>
      <h2 className={styles.activeProject__tech}>{technologies}</h2>
      <p className={styles.activeProject__desc}>{project.description}</p>
      <div className={styles.activeProject__links}>
        <h3 className={styles.activeProject__header}>LINKS:</h3>
        {project.links.map((link, i) => <a className={styles.activeProject__link} href={project.url[i]}>{link}</a>)}
      </div>
    </section>
  )
}
