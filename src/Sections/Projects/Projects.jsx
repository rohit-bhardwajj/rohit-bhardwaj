import styles from './ProjectsStyles.module.css'
import projectData from './ProjectData';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Reactjs Projects</h1>
        <div className={styles.projectContainer}>

       {
        ProjectData.map((project,index)=>
        <ProjectCard
        key={index}
        title={project.title}
        src={project.image}
        github={project.Github}
        live={project.live}
        desc={project.desc}
        
         />)
       }
        </div>
    </section>
  )
}

export default Projects