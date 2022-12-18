import React from 'react'
import { TbSmartHome } from 'react-icons/tb'
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineArrowRight } from 'react-icons/ai'
import { FiUsers } from "react-icons/fi"
import { BiChalkboard } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"
import styles from '../../styles/admin/Sidebar.module.css'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className={styles.wrapper}>

      <ul className={styles.menu}>
        <Link href='/admin/Dashboard' passHref >
          <li className={styles.item} >
            <TbSmartHome className={styles.menuIcon} />
            Dashboard
          </li>
        </Link>
        <Link href='/admin/Profile' passHref >
          <li className={styles.item}>
            <AiOutlineUser className={styles.menuIcon} />
            Profile
          </li>
        </Link>
        {/* <Link href='/admin/Users' passHref >
          <li className={styles.item}>
            <FiUsers className={styles.menuIcon} />
            users
          </li> 
  </Link> */}
        <Link href='/admin/Build' passHref >
          <li className={styles.item}>
            <AiOutlineFundProjectionScreen className={styles.menuIcon} />
            Build
          </li>
        </Link>
        <Link href='/admin/Learn' passHref >
          <li className={styles.item}>
            <BiChalkboard className={styles.menuIcon} />
            Learn
          </li>
        </Link>
        <Link href='/admin/Community' passHref >
          <li className={styles.item}>
            <FaUsers className={styles.menuIcon} />
            Community
          </li>
        </Link>
      </ul>
      <div className={styles.wrapperButton}>
        <button className={styles.button}>Login <AiOutlineArrowRight /></button>
        <button className={styles.button}>Logout <AiOutlineArrowRight /></button>

      </div>

    </div>
  )
}

export default Sidebar