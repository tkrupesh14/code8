import React,{useEffect} from 'react'
import styles from "../../styles/Build/Howitworks.module.css"
import gsap from 'gsap'

const Howitworks = () => {
    useEffect(() => {
        gsap.fromTo(".step-number",{ y:-40 ,opacity:0,rotationZ:-127,scrollTrigger:'.step-number'},{duration:1,stagger:0.6,y:0,opacity:1,rotationZ:0})
        gsap.fromTo(".procede-description",{y:-40,opacity:0},{duration:1,stagger:0.7,y:0,opacity:1})
      },[])

  return (
    <div className={styles.Howitworks}>
    <div className={styles.Howitworks_head}>
    How it works
    </div>
    <div className={styles.procede_holder}>
        <div className={styles.proced_step}>
            <div className={`step-number ${styles.step_number}`}>1</div>
            <div className={styles.procede_description}>Take challenge</div>
        </div>
        <div className={styles.proced_step}>
            <div className={`step-number ${styles.step_number}`}>2</div>
            <div className={styles.procede_description}>Start building</div>
        </div>
        <div className={styles.proced_step}>
            <div className={`step-number ${styles.step_number}`}>3</div>
            <div className={styles.procede_description}>Ask for help</div>
        </div>
        <div className={styles.proced_step}>
            <div className={`step-number ${styles.step_number}`}>4</div>
            <div className={styles.procede_description}>Submit</div>
        </div>
        <div className={styles.proced_step}>
            <div className={`step-number ${styles.step_number}`}>5</div>
            <div className={styles.procede_description}>Pay and earn the certificate</div>
        </div>
    </div>
    </div>
  )
}

export default Howitworks