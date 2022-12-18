import React from 'react'
import styles from '../styles/Whodrivesus.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Vision from '../assets/images/Vision.png'
import Mission from '../assets/images/Mission.jpg'

const Card = (props) => {
    return (
        <div className={`${styles.w__card} ${props.index===0? "":`${styles.not__first__card}`}`} id="im3">
            <Image src={props.imgLink} alt="ima" width={100} height={100}/>
            <div className={styles.w__reason}>{props.title}</div>
            <div className={styles.w__card__content}>
                {props.content}
            </div>
        </div>
    )
}
const data = [
    {
        title: "Vision",
        imgLink: Vision,
        content: "To provide industry relevant skills and exposure to every engineer in making."
    },
    {
        title: "Mission",
        imgLink: Mission,
        content: "Upskilling young geniuses to create a better world through technology."
    }
]
const Whodrivesus = () => {
  return (
    <div>
      <div className={styles.Whatdrivesus}>
            <div className={styles.w__card__holder}>
                {data.map((item, index) => {
                    return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Whodrivesus
