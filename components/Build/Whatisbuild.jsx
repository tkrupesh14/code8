import React from "react";
import styles from "../../styles/Build/Whatisbuild.module.css";

const Whatisbuild = () => {
  return (
    <div className={styles.Whatisbuild}>
      <div className={styles.builttop}>
        <div className={styles.builtpara}>
          <div className={styles.build_head}>
            Master your skill, one project at a time !
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            We have created a wide range of build programs where you can hone
            your skill while working on projects.
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <a href="#FindNextProject">Start Building Project</a>
          </div>
        </div>
        <img src="../images/Build/build.jpeg" />
      </div>
    </div>
  );
};

export default Whatisbuild;
