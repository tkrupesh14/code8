import React, { useRef } from "react";
import WhyWithUsCard from "./WhyWithUsCard";
import { motion } from "framer-motion";
import styles from '../../styles/WorkshopsCard.module.css'


const Card = (props) => {
  return (
      // <div className={`${styles.w__card} ${props.index===0? "":`${styles.not__first__card}`}`} id="im3">
      //     <Image src={props.imgLink} alt="ima" width={100} height={100}/>
      //     <div className={styles.w__reason}>{props.title}</div>
      //     <div className={styles.w__card__content}>
      //         {props.content}
      //     </div>
      // </div>
      <>
       <div>
      <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
      <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
     
       <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       className="w-56 bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
     >
     {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
       <div className="text-2xl font-semibold text-center mt-5 mb-10 text-pink-500">
         {props.title}
       </div>
       <div className="mb-5 text-center">{props.content}</div>
     </motion.div>
     </div>
     </>
  )
}
const data = [
  {
      title: "Community led learning programs",
      content: "Learn with the community and start building from day1 with our best curated resources."
  },
  {
      title: "24x7 community supports",
      content:"Discuss and Collab with likemind and experts from our community to build projects."
  },
  {
    title: "Best in class curated projects.",
      content: "Our projects and curriculum help you achieve industry standard skills and experience."
  },
  {
    title: "Earn skill badges and certificates.",
      content: "Earn our badges and certificates that help you land internships,projects and jobs."
  }
]


const WhyWithUs = (props) => {
  const { Heading } = props
  return (
    <div>
       <p className="text-5xl font-semibold z-20 mt-10 text-center title">
      {Heading}
      </p>
      <div className={styles.Whatdrivesus}>
            <div className={styles.w__card__holder}>
                {data.map((item, index) => {
                    return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
                })}
            </div>
        </div>
    </div>
  );
};

export default WhyWithUs;
