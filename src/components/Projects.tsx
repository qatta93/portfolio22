import React, {useState} from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ActiveProject } from './ActiveProject';
import styles from '../../public/styles/Projects.module.css';
import projectsData from '../../public/api/projects.json';

export const Projects = () => {

const [activeProject, setActiveProject] = useState(null);
const project = projectsData.filter(project => project.id === activeProject);

if(activeProject === null){
  return (
    <section className={styles.projects}>
      <SectionHeader title={'Projects'} />
      <div className={styles.projects__wrapper}>
        {projectsData.map(project => 
          <ProjectCard 
          key={project.id} 
          id={project.id} 
          name={project.name} 
          tech={project.tech} 
          img={project.img} 
          setActiveProject={setActiveProject}/>)}
      </div>
    </section>
  )
} 
return <ActiveProject key={project[0].id} project={project} setActiveProject={setActiveProject}/>
}
