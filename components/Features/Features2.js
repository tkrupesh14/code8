import styles from "../../styles/Features2.module.css";

export default function Features2() {
  return (
   
<div className={`${styles.feature2}`}>
  <div className={`${styles.feature2_heading}`}><h1 className={`${styles.build_head}`}>Features</h1>
  <p style={{color:'black'}}>
    What makes our courses special?
  </p>
</div>
  <div className={`${styles.grid_container_home}`}>
    <div className={`${styles.grid_item}`}>
      <div className={`${styles.features_class}`}>
       <img style={{ display: 'flex' }} src="/images/brain.png"/>
      </div>

      <div className={`${styles.courses_features_h1}`}>Industry relevent curriculum</div>

      <p className={`${styles.courses_features_para}`}>
        That keeps you ahead in career.
      </p>
    </div>

    <div className={`${styles.grid_item}`}>
      <div className={`${styles.features_class}`}>
       <img style={{ display: 'flex' }} src='/images/Notes.png'/>
      </div>

      <div className={`${styles.courses_features_h1}`}>Project based experiential learning</div>

      <p className={`${styles.courses_features_para}`}>
        Specially designed to provide you with relevant experience and hands-on.

      </p>
    </div>

    <div className={`${styles.grid_item}`}>
      <div className={`${styles.features_class}`}>
       <img style={{ display: 'flex' }} src="/images/projects.png"/>
      </div>

      <div className={`${styles.courses_features_h1}`}>Community driven collaborative learning</div>

      <p className={`${styles.courses_features_para}`}>
        Take the community advantage to learn beyond classroom lectures.
      </p>
    </div>
  </div>

  <div className={`${styles.flex}`}
    style={{
      width: '100%',
      justifyContent: 'space-between',
    }}>
      <div className={`${styles.grid_item1}`}
      style={{
      width: '20%',
    }}
      ></div>
      <div
        className={`${styles.grid_item}`}
        style={{
          background: '#F5F5F5',
          margin: '1rem',
          borderRadius: '27px',
          padding: '0.7rem  1rem',
          // width: "60%"
        }}
      >
  
      
        <div className={`${styles.features_class}`}>
          <img style={{ display: 'flex' }} src='/images/completion.png'></img>
        </div>
  
        <div className={`${styles.courses_features_h1}`}>Skill validation and certificates</div>
  
        <p className={`${styles.courses_features_para}`}>
         Get your skills validated and become certified by industry professionals.
        </p>
  
      </div>
      <div
    className={`${styles.grid_item1}`}
    style={{
      width: '20%'
    }}
  ></div>
  
    </div>
  </div>)
}