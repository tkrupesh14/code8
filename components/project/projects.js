// import Link from "next/link";
// import styles from "../../styles/projects/Project.module.css";

// const Projects = ({ title, description, id, technologies }) => {
//   return (
//     <div className={`${styles.Projects}`}>
//       <div className={`${styles.Project_name}`}>{title}</div>
//       <div className={`${styles.Project_description}`}>
//         {description?.substring(0, 100)}
//       </div>

//       <div className="flex space-x-3 flex-wrap items-center">
//         {technologies?.map((tech) => {
//           return <span className="text-blue-500 bg-white ">{tech}</span>;
//         })}
//       </div>
//       <div className={`${styles.Project_buttons}`}>
//         <Link href={`/projects/${id}`}>
//           <button className={`${styles.View}${styles.project_but}`}></button>
//         </Link>
//         <Link href="/projects/projectdesc">
//           <a>
//             <button className={`${styles.Download} ${styles.project_but}`}>
//               Discuss in Communinty
//             </button>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import Link from "next/link";
import React from "react";

const Project = ({
  id,
  title,
  description,
  technologies,
  onStartClick,
  onDiscussClick,
}) => (
  <div className="bg-white shadow-md border-2 hover:border-blue-300 duration-200 rounded-lg p-6">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-gray-700 mb-4 min-h-[6rem] truncate whitespace-pre-wrap">
      {description}
    </p>
    <div className="mb-4">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between">
      <Link href={`projects/${id}`}>
        <button className="px-4 py-2 hover:px-5 duration-300 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Start Building Project
        </button>
      </Link>
      <button
        onClick={onDiscussClick}
        className="px-4 py-2 font-medium text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
      >
        Discuss in Community
      </button>
    </div>
  </div>
);

export default Project;
