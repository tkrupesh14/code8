import React from "react";
import styles from "../../styles/projects/Explorecategories.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Explorecategories = (props) => {
  return (
    <>
    <div>
        <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
        <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 top-4 opacity-20"></div>
       
         <motion.div
         whileHover={{ scale: 1.1 }}
         
         className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
       >
       {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
       <img src={`/images/projects/${props.image}.png`} alt="" />
         <div className="text-2xl font-semibold mt-5 mb-5 text-pink-500">
         {props.topic}
         </div>
         <div className="mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde
            voluptate nihil dolor perferendis! Porro, ex architecto voluptatum
            sint repellat ut! Nemo.</div>
            <Link href={`/projects?domain=${props.topic}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      
      {props.options && (
        <div className={`${styles.Category_operations} `}>
          <Link href="/projects" className="cursor-pointer cat-option">
          <p className="cursor-pointer bg-blue-500 rounded-full text-center p-2">Expolore {props?.topic}</p>
          </Link>
          {/* <button className="cat-option 😁">
            Join the community <i className="fa-solid fa-arrow-right"></i>{" "}
          </button> */}
        </div>
      )}
       </motion.div>
       </div>
  
    </>
  );
};

export default Explorecategories;
