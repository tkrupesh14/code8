import React from 'react'
import {motion} from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import EventImage from './EventImage'
import Image from 'next/image'
import styles from "../../styles/community/Events.module.css";


function Events() {
    const [width, setWidth] = useState(0);
    const carosel = useRef();

    useEffect(() => {
        console.log(carosel.current.scrollWidth);
        setWidth(carosel.current.scrollWidth, carosel.current.offsetWidth);
    }, []);
  return (

    <div>
        <h1 className="title text-5xl my-10">Happenings</h1>
      <motion.div ref={carosel} className={`${styles.carosel} bg-black  bg-opacity-60 bg-gradient-to-tl to-amber-800/10 group duration-500 card-animation hover:border-black/80 via-slate-600 from-black/10`} whileTap={{cursor:"grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0, left:-2100}}  className={`${styles.inner_carosel}`}>
            {EventImage.map(image => {
                return (
                    <motion.div className={`${styles.item}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </motion.div>
                );
            })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Events
