import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Build/Findnextproject.module.css";
import SmallArrow from "../../assets/images/smallarrow.png";
import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import { useRouter } from "next/router";

const Findnexproject = () => {
  const [msg, setMsg] = useState({ message: "", theme: "success" });
  const openMsg = (message, theme = "success") => {
    setMsg({
      message,
      theme: theme ? theme : "success",
    });

    handleClick();
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const router = useRouter();
  const user = useSelector(userState);

  const handleLearnMore = () => {
    if (user) {
      router.push("/project_category");
    } else {
      openMsg("Please Login to explore more...", "error");
      //   router.push("/");
    }
  };

  return (
    <div className="text-center pt-32" id="FindNextProject">
      <h1 className={"text-3xl font-bold pb-10"}>Find your Next Project</h1>
      <div className={styles.Projectbuild_body}>
        <div className={styles.Project_template}>
          <div className={styles.Project_lvl}>Begginer</div>
          <div className={styles.Project_content}>
            Find a beginner level project for you. Which requires entry level
            skills and short time to complete.
          </div>
          <div className={styles.Progrct_link}>
            <a href="/project_cat?level=Begginer"> Learn more </a>
            <Image
              style={{ marginLeft: "15px" }}
              src={SmallArrow}
              alt="small-arrow"
            />
          </div>
        </div>
        <div className={styles.Project_template}>
          <div className={styles.Project_lvl}>Intermediate</div>
          <div className={styles.Project_content}>
            It&apos;s a mid skill project range where you can work on a
            particular project for a long span of time individually or in a
            team. It involves multi domain skills to get the project done.
          </div>
          <div className={styles.Progrct_link}>
            <a href="/project_cat?level=Intermediate"> Learn more </a>
            <Image style={{ marginLeft: "15px" }} src={SmallArrow} alt="" />
          </div>
        </div>
        <div className={styles.Project_template}>
          <div className={styles.Project_lvl}>Advanced</div>
          <div className={styles.Project_content}>
            It&apos;s a whole team project, which directs towards solving
            particular problems and developing an MVP As an innovative solution.
            Here you work with mentors in real time to get the task done
          </div>
          <div>
            <button onClick={handleLearnMore} className="text-white text-xl">
              Learn more
            </button>
            <Image
              style={{ marginLeft: "15px" }}
              src={SmallArrow}
              alt="arrow"
            />
          </div>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={msg.theme}
          sx={{ width: "100%" }}
        >
          {msg.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Findnexproject;
