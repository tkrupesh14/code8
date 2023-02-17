import { Button } from "../components/button/Button";
import Aboutcode8 from "../components/home/Aboutcode8";

import Link from "next/link";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/learn.module.css";
import Features2 from "../components/Features/Features2";
import Features from "../components/Features/Features";
import Stats from "../components/home/Stats";

export default function Courses() {
  return (
    <> 
      <div className={`${styles.learnPage}`}>
        <div className={`${styles.learn_grid_container}`}>
          <div className={`${styles.grid_item} ${styles.learn_content}`}>
            <h1 className={`${styles.learn_page_h1}`}>
              Learn skills that keeps you ahead, like never before.
            </h1>
            <p className={`${styles.coursepg}`}>
              We partner with mentors from companies like Amazon, PayTm,
              Deloitte, TCE, Hitachi, Cisco to provide you with industry
              relevant cohort based courses.
            </p>
            <div className={`${styles.flex}`}>
              <div className={`${styles.btn}`}>
                <Link href="/learn">
                  <a>
                    {" "}
                    <span className={`${styles.btn_content}`}>
                      Register to get notify for our next cohort
                    </span>
                    <span className={`${styles.icon}`}>
                      <FaArrowRight size={30} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.learn_img}`}>
            <img src="https://raw.githubusercontent.com/KapadiaShubham/code8-media/master/learn/learnpage-first-img.png"></img>
          </div>
        </div>
      </div>

      <Features2 />

      {/* Courses */}

      <div className={`${styles.bg_built_nextpro} ${styles.explore_courses}`}>
        <h1 className={`${styles.build_head} ${styles.learn_bh}`}>
          Explore Courses
        </h1>

        <p>Explore a wide range of courses!!</p>

        {/* <Cards/> */}

        <div id={`${styles.testbutton}`}></div>
      </div>
      <Aboutcode8 />

      {/* Why Code8 */}
      <div className={`${styles.why_code8_heading}`}>
        <h3>Why Us ?{/* <img src='/images/code8.png'></img> */}</h3>
      </div>
      <Features />

      <div className={`${styles.s2_hello}`}>
        <div className={`${styles.stats2_information}`}>
          <Stats />
          <div className={`${styles.mentor_text_info}`}>
            <h3>
              The learning you need, the skills you want, the career you
              deserve.
            </h3>
            <br></br>
            <div className={`${styles.register_now}`}>
              Register now and get notify for our upcoming courses.
              <br />
              <Button buttonSize="btn__large" buttonColor="blue">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
