import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import WhyWithUsCard from "./WhyWithUsCard";
import styles from '../../styles/WorkshopsCard.module.css'
import biginnerImg from '../../assets/images/Saly-10.png'
import intermediateImg from '../../assets/images/Saly-16.png'
import expertImg from '../../assets/images/Saly-31.png'

const Card = (props) => {
  return(
  <div>
        <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
        <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-fu
        ll absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
       
         <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="w-72 bg-clip-padding  backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
       >
        <div className="ml-16">
       <Image src={props.imgLink} alt="ima" width={100} height={100}/>
       </div>
         <div className="text-2xl font-semibold mt-5 mb-10 text-pink-500 text-center">
           {props.title}
         </div>
        
         <div className="mb-5 text-center">{props.content}</div>
       </motion.div>
       </div>
  )
}
const data = [
  {
      title: "Build",
      imgLink: biginnerImg,

      content: "Our build program offers project-based learning opportunities in most industry-relevant tech stacks. It helps you hone your skills and let you validate your skills with our certification."
  },
  {
      title: "Learn",
      imgLink: intermediateImg,

      content:"We offer a wide range of cohort-based learning courses, which helps you gain extra edge on your learning with project-based experiential learning advantage."
  },
  {
    title: "Community",
    imgLink: expertImg,

      content: "Join our peer-to-peer learning ecosystem to learn among peers, share skills, and collaborate on projects. Our events and workshops keep you up-to-date with the latest learning trends."
  }
]
const WhyWithUs = (props) => {
  const { Heading } = props
  return (
  
    <div className="2xl:mx-72 my-20">
      <p className="text-5xl font-semibold z-20 mt-10 text-center title">
      {Heading}
      </p>
      <div>
   
   <div className={styles.Whatdrivesus}>
         <div className={styles.w__card__holder}>
             {data.map((item, index) => {
                 return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
             })}
         </div>
     </div>
 </div>
    </div>
  );
};

export default WhyWithUs;
