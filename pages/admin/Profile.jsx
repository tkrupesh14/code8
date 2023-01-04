import Image from "next/image";
import React from "react";
import Sidebar from "../../Admin/components/Sidebar";
import styles from "../../styles/admin/Profile.module.css";
import Logo from "../../assets/images/profile.png";
// import {HiOutlinePencilSquare} from 'react-icons/hi'
import { ImPencil2 } from "react-icons/im";

import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
const Profile = () => {
  const user = useSelector(userState);
  if (!user?.user?.isAdmin) return null;
  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.wrapperMain}>
        <h1 className={styles.wrapperTitle}>My Profile</h1>
        <div className={styles.main}>
          <div className={styles.profileImage}>
            <button className={styles.profileButton}>
              {/* <HiOutlinePencilSquare /> */}
              <ImPencil2 />
            </button>
            <Image
              src={Logo}
              alt="image-profile"
              width={100}
              height={100}
              className={styles.profileLogo}
            />
          </div>
          <div className={styles.bio}>
            {/* name  */}
            <h1 className={styles.name}>Jimmy Johnson</h1>
            {/* job title */}
            <h3 className={styles.job}>Front-end Developer</h3>
          </div>
        </div>
        <div>
          <h1 className={styles.info}>
            Edit Information{" "}
            <span>
              <ImPencil2 />
            </span>
          </h1>
        </div>
        <div className={styles.formData}>
          <form action=" " method="Post" className={styles.formInfo}>
            <div className={styles.formGroup}>
              <label htmlFor="FirstName" className={styles.formLabel}>
                FirstName:*
                <input
                  type="text"
                  placeholder="Jimmy"
                  className={styles.formInput}
                />
              </label>
              <label htmlFor="LastName" className={styles.formLabel}>
                {" "}
                LastName:*
                <input
                  type="text"
                  placeholder="Johnson"
                  className={styles.formInput}
                />
              </label>
              <label htmlFor="Password" className={styles.formLabel}>
                Password:
                <input
                  type="password"
                  placeholder="change Password"
                  name=""
                  id=""
                  className={styles.formInput}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="Email" className={styles.formLabel}>
                Email: *
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="jimmyjohn43@gmail.com"
                />
              </label>
              <label htmlFor="Phone" className={styles.formLabel}>
                Phone:
                <input
                  type="tel"
                  className={styles.formInput}
                  placeholder="(+91) xxxxx-xxxxx"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
