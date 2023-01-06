import React, { useEffect } from "react";
import styles from "../../styles/Build/Howitworks.module.css";
import gsap from "gsap";

const Howitworks = () => {
  useEffect(() => {
    gsap.fromTo(
      ".step-number",
      { y: -40, opacity: 0, rotationZ: -127, scrollTrigger: ".step-number" },
      { duration: 1, stagger: 0.6, y: 0, opacity: 1, rotationZ: 0 }
    );
    gsap.fromTo(
      ".procede-description",
      { y: -40, opacity: 0 },
      { duration: 1, stagger: 0.7, y: 0, opacity: 1 }
    );
  }, []);

  return (
    // <div className={styles.Howitworks}>
    //   <div className={styles.Howitworks_head}>How it works</div>
    //   <div className={styles.procede_holder}>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>1</div>
    //       <div className={styles.procede_description}>Take challenge</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>2</div>
    //       <div className={styles.procede_description}>Start building</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>3</div>
    //       <div className={styles.procede_description}>Ask for help</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>4</div>
    //       <div className={styles.procede_description}>Submit</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>5</div>
    //       <div className={styles.procede_description}>
    //         Pay and earn the certificate
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="text-center relative">
      <h1 className="title text-6xl font-semibold">How it works</h1>
      <p className="text-white/5 font-bold text-[9rem] drop-shadow-lg absolute top-40 cursor-default select-none left-0 -rotate-90">
        WORKS
      </p>
      <p className="max-w-3xl mx-auto mt-5">
        We have curated the best possible ecosystem to build projects and get
        upskill on the go. Our community is a blend of industry experts and
        students along with our curriculum helps you achieve your upskilling
        goals in no time.
      </p>

      <div className="max-w-2xl mx-auto mt-20">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800">
              1
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Join the learning programs and cohorts in code8 community
            </h3>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              2
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Learn with the mentors from top companies .
            </h3>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              3
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Take the challenge and start building a project of your choice.
            </h3>
          </li>
          <li class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              4
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Submit the project and earn badges and certificates.
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Howitworks;
