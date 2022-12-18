import React, { useEffect, useState } from "react";
import { Button } from "./button/Button";
import Link from "next/link";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";

import styles from "../styles/Navbar.module.css";
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openForget, setOpenForget] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [pop, setpop] = useState(true);

  const [button1, setButton1] = useState(true);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseForget = () => setOpenForget(false);
  const handleOpenForget = () => setOpenForget(true);

  const handleCloseReset = () => setOpenReset(false);
  const handleOpenReset = () => setOpenReset(true);

  useEffect(() => {
    // const showButton1 = () => {
    //   makes button dissapear when width is less than 960
    //   if (window.innerWidth <= 960) {
    //     setButton1(false);
    //   } else {
    //     setButton1(true);
    //   }
    // };
    // window.addEventListener("resize", showButton1);
  }, []);

  // Dropdown1
  const [click1, setClick1] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick1 = () => setClick1(!click1);
  const closeMobileMenu1 = () => {
    setClick1(false);
  };

  const extendElement1 = () => {
    dropdown1 ? setDropdown1(false) : setDropdown1(true);
  };

  return (
    <div className={`${styles.navbar_c}`}>
      <nav className={`${styles.navbar_s}`}>
        <Link href="/">
          <div className={`${styles.navbar_s_logo}`} onClick={closeMobileMenu1}>
            <img
              src="/images/code8.png"
              alt="code8-logo"
              className={`${styles.logo_nav}`}
            ></img>
          </div>
        </Link>

        <div className={`${styles.menu_icon}`} onClick={handleClick1}>
          <div className={click1 ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* <div className={`${styles.menu_c}`}> */}
        <ul
          className={`${styles.nav_menu} ${
            click1 ? styles.active : styles.hidden
          }`}
        >
          <li className={`${styles.nav_item}`}>
            <Link href="/">
              <div className={`${styles.nav_links}`} onClick={closeMobileMenu1}>
                Home
              </div>
            </Link>
          </li>

          <li className={`${styles.nav_item}`}>
            <Link href="/about">
              <div className={`${styles.nav_links}`} onClick={closeMobileMenu1}>
                About us
              </div>
            </Link>
          </li>

          <li className={`${styles.nav_item}`} onClick={extendElement1}>
            <Link href="/build">
              <div className={`${styles.nav_links}`} onClick={closeMobileMenu1}>
                Build
              </div>
            </Link>
          </li>

          <li className={`${styles.nav_item}`} onClick={closeMobileMenu1}>
            <Link href="/learn">
              <div className={`${styles.nav_links}`}>Learn</div>
            </Link>
          </li>

          <li className={`${styles.nav_item}`} onClick={closeMobileMenu1}>
            <Link href="/community">
              <div className={`${styles.nav_links}`}>Community</div>
            </Link>
          </li>

          <li className={`${styles.nav_item}`} onClick={closeMobileMenu1}>
            <div className={`${styles.login_sign}`}>
              <div className="btn-mobile">
                {button1 && (
                  <Button
                    buttonStyle="btn--primary btn--mobile"
                    buttonSize="btn--medium"
                    onClick={handleClickOpen}
                  >
                    Login
                  </Button>
                )}
              </div>
              <div className="btn-mobile">
                {button1 && (
                  <Button
                    buttonStyle="btn--primary btn--mobile"
                    buttonSize="btn--medium"
                    onClick={handleClickOpen2}
                  >
                    Sign Up
                  </Button>
                )}
              </div>
            </div>
          </li>
        </ul>

        {pop && (
          <div className={`${styles.Popup}`}>
            <div className={`${styles.popup_head}`}>
              <div className="close-button">
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    setpop(false);
                  }}
                ></i>
              </div>
            </div>
            <div className={`${styles.popup_body}`}>
              <p>Let opportunities land in your inbox.</p>
              <div onClick={handleClickOpen2} style={{ cursor: "pointer" }}>
                Sign up now for free.{" "}
              </div>
            </div>
          </div>
        )}
      </nav>
      <Dialog
        open={open2}
        onClose={handleClose2}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleClose2}
                style={{ cursor: "pointer" }}
                alt="close"
              />
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  marginRight: "18px",
                  fontSize: "16px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                }}
              >
                New to Code8 ?
              </div>
              <Button
                buttonStyle="btn--primary sizee"
                buttonSize="btn--small"
                buttonStyl
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="Password"
              fullWidth
              style={{ margin: "15px 0px 5px 0px" }}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </span>
          </div>
          <Button
            buttonStyle="btn--primary sizee"
            buttonSize="btn--small"
            stylee="stylee"
          >
            Signup
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 0px 0px",
            }}
          ></div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  marginRight: "18px",
                  fontSize: "16px",
                  lineHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                New to Code8 ?
              </div>
              <Button
                buttonStyle="btn--primary sizee btn--mobile"
                buttonSize="btn--small"
              >
                Sign Up
              </Button>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span
              style={{
                margin: "10px 0px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "35px",
                lineHeight: "72px",
                display: "flex",
                alignItems: "center",
                color: "#000000",
              }}
            >
              Welcome Back
            </span>
          </div>

          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="Password"
              fullWidth
              style={{ margin: "15px 0px 5px 0px" }}
            />
            <button
              onClick={handleOpenForget}
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </button>
          </div>
          <Button
            buttonStyle="btn--primary sizee"
            buttonSize="btn--small"
            stylee="stylee"
          >
            Login
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px 0px 0px",
            }}
          ></div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>

      <Dialog
        open={openForget}
        onClose={handleCloseForget}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleCloseForget}
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span
              style={{
                margin: "10px 0px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "35px",
                lineHeight: "72px",
                display: "flex",
                alignItems: "center",
                color: "#000000",
              }}
            >
              Forget Password
            </span>
          </div>

          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <Button
              buttonStyle="btn--primary sizee"
              buttonSize="btn--small"
              stylee="stylee"
            >
              Submit
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px 0px 0px",
              }}
            >
              <Button
                buttonStyle="btn--outline sizee"
                buttonSize="btn--small"
                style={{ color: "#FFFFFF" }}
              >
                Back to Login
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>

      <Dialog
        open={openReset}
        onClose={handleCloseReset}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <img
                src="https://github.com/KapadiaShubham/code8-media/blob/master/images/x-mark%201.png?raw=true"
                onClick={handleCloseReset}
                style={{ cursor: "pointer" }}
                alt=""
              />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span
              style={{
                margin: "10px 0px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "35px",
                lineHeight: "72px",
                display: "flex",
                alignItems: "center",
                color: "#000000",
              }}
            >
              Reset Password
            </span>
          </div>

          <div>
            <TextField label="Email" fullWidth style={{ margin: "15px 0px" }} />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              style={{ margin: "15px 0px" }}
            />
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              style={{ margin: "15px 0px 30px 0px" }}
            />
            <Button
              buttonStyle="btn--primary sizee"
              buttonSize="btn--small"
              stylee="stylee"
            >
              Reset Password
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px 0px 0px",
              }}
            >
              <Button
                buttonStyle="btn--outline sizee"
                buttonSize="btn--small"
                style={{ color: "#FFFFFF" }}
              >
                Back to Login
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
