import Image from 'next/image'
import React from 'react'
import Sidebar from "../../Admin/components/Sidebar"
import styles from "../../styles/admin/Dashboard.module.css"
import profile from "../../assets/images/profile.png"
import dots from "../../assets/images/dots.png"
const Dashboard = () => {


  return (
    <div className={styles.wrapperDashboard}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.mainScreen}>
        <div className={styles.headBar}>
          <div className={styles.headRight}>
            <div className={styles.headText}>Welcome Back <span> Jimmy</span> </div>
          </div>
          <div className={styles.headLeft}>
            <Image
              src={profile}
              width={70}
              height={70}
              alt="profile"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.searchBar}>
          <input placeholder=' ' className={styles.inputBar} />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.activity}>
          <button id={styles.student}>Enroll Student</button>
          <button id={styles.batch}>Enroll Batch</button>
          <button id={styles.project}>Assign Project</button>
        </div>
        <div className={styles.chartBox}>
          <div className={styles.boxHeading}>
            <div className={styles.temp}>
              <h1 className={styles.boxTitle}>Total Projects</h1>
            </div>
            <div>
              <Image
                src={dots}
                width={30}
                height={10}
                alt='3-dots'
              />
            </div>
          </div>
          <div className={styles.int}>
            <h1>46</h1></div>
          <div className={styles.chart}>
            78%
          </div>
        </div>
        <div className={styles.boxHeading}>monthly analysis</div>
      </div>
    </div>
  )
}

export default Dashboard