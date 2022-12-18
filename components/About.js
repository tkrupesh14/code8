import React from 'react'
import styles from '../styles/Aboutus.module.css'

const About = () => {
  return (
    <div>
         <div className={styles.grid__container}>
        <div className={styles.grid__item}>
          <h1
            className={styles.head1}>
            Who we are?
          </h1>

          <p className={styles.para}>
            Code8 is an experiential learning platform driven by the energy of
            code and ideas to harness the power of innovation in learners. We
            are building a culture to work on projects while getting upskilled
            with industry relevant learnings and experience.
          </p>
        </div>

        <div className={styles.im1}>
          <img
            id="img-ab"
            className={styles.im2}
            src="https://github.com/KapadiaShubham/code8-media/blob/master/about-us/abo.png?raw=true"
          ></img>
        </div>
        </div>
    </div>   
  )
}

export default About
