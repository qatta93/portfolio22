import React from 'react';
import styles from '../../../../public/styles/ProjectCard.module.css';
import { ProjectCardProps } from '../../../types';

export const ProjectCard = ({ id, name, tech, img, setActiveProject }:ProjectCardProps) => {

  const technologies = tech.toString().replace(/,/g, ' | ');

  const activeProject = (projectId:number) => {
    return setActiveProject(projectId);
  }

  return (
    <article className={styles.project} onClick={() => activeProject(id)}>
      <h2 className={styles.project__name}>{name}</h2>
      <h3 className={styles.project__tech}>{technologies}</h3>
      <img src={img} alt={name} className={styles.project__img}/>
      <div className={styles.project__loupe}></div>
    </article>
  )
}
