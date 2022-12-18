import React from 'react'
import Sidebar from '../../Admin/components/Sidebar'
import styles from '../../styles/admin/Users.module.css'
const Users = () => {
  return (
    <div className={styles.wrapper}>
    <div>
      <Sidebar />
    </div>
    <div>
      <h1>Users</h1>
    </div>
  </div>
  )
}

export default Users