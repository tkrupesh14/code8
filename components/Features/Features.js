import styles from "../../styles/Features.module.css"
const Features = () => {
  return (
    
    <div className={`${styles.Featuresc}`}>
      <div className={`${styles.Featuresc_holder}`}>
        <div className={`${styles.Feature} ${styles.Red}`}>
        Industry relevant cohort based learning
      </div>
      <div className={`${styles.Feature} ${styles.Blue}`}>Experiential and project based approach </div>
    <div className={`${styles.Feature} ${styles.Yellow}`}>Skill based learning</div>
        <div className={`${styles.Feature} ${styles.Green}`}>Mentors who have made it already</div>
      </div>
    </div>
  
    
  )
}

export default Features