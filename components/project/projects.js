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
import { motion } from "framer-motion";

const Project = ({
  id,
  title,
  description,
  technologies,
  onStartClick,
  onDiscussClick,
}) => (
  <div>
  <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 -bottom-64 opacity-10"></div>
  <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-5 -bottom-48 opacity-10"></div>
 
   <motion.div
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
   className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
 >
 {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
   <div className="text-2xl font-semibold mt-5 mb-5 text-pink-500">
   {title}
   </div>
   <div className="mb-5"> {description}</div>
   <Link href={`projects/${id}`}>
    <i className="fa-solid fa-arrow-right"></i>
  </Link>
  <div className="">
      <Link href={`projects/${id}`}>
        <button className="px-4 py-2 hover:px-5 duration-300 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline  mx-2 my-10">
          Start Building Project
        </button>
      </Link>
      <Link href="">
      <button
        onClick={onDiscussClick}
        className="px-4 py-2 font-medium text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
      >
        Discuss in Community
      </button>
      </Link>
    </div>
 </motion.div>
 </div>
  // <div className="bg-white shadow-md border-2 hover:border-blue-300 duration-200 rounded-lg p-6">
  //   <h2 className="text-3xl font-bold mb-4">{title}</h2>
  //   <p className="text-gray-700 mb-4 min-h-[6rem] truncate whitespace-pre-wrap">
  //     {description}
  //   </p>
  //   <div className="mb-4">
  //     {technologies.map((tech) => (
  //       <span
  //         key={tech}
  //         className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
  //       >
  //         {tech}
  //       </span>
  //     ))}
  //   </div>
   
  // </div>
);

export default Project;
