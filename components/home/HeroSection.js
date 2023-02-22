import React from "react";
// import { Button } from '../../Button';
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/home/HeroSection.module.css";
import { Button } from "../button/Button.js";
import { motion } from "framer-motion";
import HeroImg from "../../assets/images/home/hero.png";

function HeroSection({
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={`${styles.home__hero_section}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.row} ${styles.home__hero_row}`}>
            <div className={`${styles.col}`}>
              <div className={`${styles.home__hero_text_wrapper}`}>
                {/* <div className={`${styles.top_line}`}>{topLine}</div> */}
                <h1 className="text-5xl font-bold text-blue-500 drop-shadow shadow-yellow-500 leading-snug title text-left">
                  Doing Projects made easy,
                  <br />
                  professionally !
                </h1>
                <p className={`${styles.home__hero_subtitle}`}>{description}</p>
                <Link href="/community" passHref>
                  <a>
                    <motion.div
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
                      style={{
                        boxShadow: "0px 4px 20px #55CAFA",
                      }}
                      whileHover={{ scale: 1.1, x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        Join Our Community
                      </span>
                    </motion.div>
                  </a>
                </Link>
              </div>
            </div>
            <div className={`${styles.col}`}>
              <div className={`${styles.home__hero_img_wrapper}`}>
                <Image src={HeroImg} width="500px" height="500px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
