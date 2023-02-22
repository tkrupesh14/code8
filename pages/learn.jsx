import { Button } from "../components/button/Button";
import AboutUs from "../components/AboutUs";

import Link from "next/link";
import Image from "next/image";
import SAP from "../components/learn/SAP";
import MobileSAP from '../components/community/MobileSAP'

import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/learn.module.css";
import Features2 from "../components/Features/Features2";
import Features from "../components/Features/Features";
import Stats from "../components/home/Stats";
import { motion } from "framer-motion";
export default function Courses() {
  return (
    <> 
      <div className="bg-black text-white">
        <SAP/>
        <MobileSAP heading="Learn, Build & Collabroate" description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help." button="Join Our Community"/>
      <Features2 />

      {/* Courses */}

      <div className={`${styles.bg_built_nextpro} ${styles.explore_courses}`} style={{background:'#8E7AF6'}}>
        <h1 className={`${styles.build_head} ${styles.learn_bh}`}>
          Explore Courses
        </h1>

        <p>Explore a wide range of courses!!</p>

        {/* <Cards/> */}

        <div id={`${styles.testbutton}`}></div>
      </div>
      <AboutUs Heading="How it works?" SideHeading="WORKS"/>

      {/* Why Code8 */}
      <div className={`${styles.why_code8_heading}`}>
        <h3>Why Us ?{/* <img src='/images/code8.png'></img> */}</h3>
      </div>
      <Features />

      <div className={`${styles.s2_hello}`}>
        <div className={`${styles.stats2_information}`}>
          <Stats />
          
        </div>
        <div className="">
        <div className={`${styles.mentor_text_info}`}>
    
      <p className="max-w-3xl mx-auto mt-5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis atque, labore optio architecto officia nemo excepturi quam voluptas ex dicta natus? Quam minima reiciendis quo autem, deserunt molestiae delectus voluptatibus.
      </p>
              <div className='mt-10'>
              <a href='#'>
                    <motion.div
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
                      style={{
                        boxShadow: "0px 4px 20px #543eff99",
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
                          fill="no</div>ne"
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
                  </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
