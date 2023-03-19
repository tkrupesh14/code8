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
        <h1 className="title text-5xl my-10">Events</h1>
      <motion.div ref={carosel} className={`${styles.carosel}`} whileTap={{cursor:"grabbing"}}>
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
