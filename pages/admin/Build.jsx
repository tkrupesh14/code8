import React from 'react'
import Image from 'next/image'
import Sidebar from '../../Admin/components/Sidebar'
import styles from '../../styles/admin/Build.module.css'
import profile from "../../assets/images/profile.png"
import { BiSearchAlt } from 'react-icons/bi'
const Build = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.mainscreen}>
        <div className={styles.buildHead}>
          <div className={styles.buildHeadLeft}>
            <div className={styles.buildHeadText}>Weclome Back Jimmy</div>
          </div>
          <div className={styles.buildHeadright}>
            <div className={styles.buildProfile}>
              <Image
                src={profile}
                width={70}
                height={70}
                alt="profile"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.buildSearch}>
              <input type="text" placeholder='Search' />
            </div>
          </div>
        </div>
        <div className={styles.Choose_holder}>
          <div className={styles.Choose_heading}>Choose Category</div>
          <div className={styles.Choose_box}>
            <div className={styles.Choose_head}>Existing Category</div>
            <hr />
            <div className={styles.Choices}>cat-1</div>
            <div className={styles.Choices}>cat-2</div>
            <div className={styles.Choices}>cat-3</div>
          </div>
          <div className={styles.Add_new}> Add new category </div>
        </div>
        <div className={styles.Bottom_buttons}>
          <button className={styles.Save}>Save</button>
          <button className={styles.Next}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Build