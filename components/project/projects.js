import Link from "next/link";
import styles from "../../styles/projects/Project.module.css";

const Projects = ({ title, description, id }) => {
  return (
    <div className={`${styles.Projects}`}>
      <div className={`${styles.Project_name}`}>{title}</div>
      <div className={`${styles.Project_description}`}>
        {description?.substring(0, 100)}
      </div>
      <div className={`${styles.Project_buttons}`}>
        <Link href={`/projects/${id}`}>
          <button className={`${styles.View}${styles.project_but}`}>
            View Project <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
        <Link href="/projects/projectdesc">
          <a>
            <button className={`${styles.Download} ${styles.project_but}`}>
              Download Projects <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
