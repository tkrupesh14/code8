import Link from 'next/link'
import styles from "../../styles/projects/Project.module.css"


const Projects = () => {
  return (<div className={`${styles.Projects}`}>
    <div className={`${styles.Project_name}`}>
        Amazon Clone
    </div>
    <div className={`${styles.Project_description}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur consequatur magni! Eveniet nemo nulla, velit minus nostrum magni impedit fugit distinctio.
    </div>
    <div className={`${styles.Project_buttons}`}>
       <Link href="/projects/projectdesc"><a> <button className={`${styles.View }${styles.project_but}`}>View Project  <i className="fa-solid fa-arrow-right"></i></button></a></Link>
        <Link href="/projects/projectdesc"><a><button className={`${styles.Download} ${styles.project_but}`}>Download Projects  <i className="fa-solid fa-arrow-right"></i></button></a></Link>
    </div>
  </div>
  )
}

export default Projects