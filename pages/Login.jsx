import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Landing from "../assets/images/login/login-dashboard.png";
import styles from "../styles/admin/Login.module.css";
const Login = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.wrapperHeading}>Welcome</h1>
        <h2 className={styles.wrapperSubHeading}>
          Please <span className={styles.colour}>Login</span> or{" "}
          <span className="">Sign-up</span> to continue
        </h2>
      </div>
      <div className={styles.loginSection}>
        <div>
          <Image src={Landing} alt="landing-image" />
        </div>
        <div className={styles.loginButton}>
          <button className={styles.btn}>
            Sign-Up <AiOutlineArrowRight />{" "}
          </button>
          <button className={styles.btn}>
            Sign-In
            <AiOutlineArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
