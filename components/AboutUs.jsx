import React, { useEffect } from "react";
import styles from "../styles/Build/Howitworks.module.css";
import gsap from "gsap";
import Image from "next/image";

const AboutUs = (props) => {
  const { Heading, SideHeading } = props;
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
      <h1 className="title text-2xl mt-10 font-semibold">{Heading}</h1>
      <p className="text-white/10 font-bold text-[9rem] drop-shadow-lg absolute top-40 cursor-default select-none left-0 -rotate-90">
        {SideHeading}
      </p>
      <p className="max-w-3xl mx-auto px-10 mt-5">
      Enabling community led peer to peer learning like never before.. <br/>
      Code8 is an experiential learning platform driven by the energy of code and ideas to harness the power of innovation in learners. We are building a culture to work on projects while getting upskilled with industry-relevant learnings and experience.
      </p>

      <div className="max-w-4xl mx-auto px-10 mt-20">
        <ol class="relative border-l border-white/30 drop-shadow-xl shadow-orange-300 space-y-16">
          <li class="mb-10 ml-6 group ">
            <span class="absolute flex items-center justify-center w-10 duration-300 group-hover:scale-150 aspect-square group-hover:shadow-xl group-hover:shadow-purple-200 bg-blue-200 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800">
              <Image
                className=""
                src={"/images/icons/join.png"}
                layout="fill"
              />
            </span>
            <h3 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
            Learn industry-relevant skills live with mentors from the industry.
            </h3>
          </li>
          <li class="mb-10 ml-6 group">
            <span class="absolute flex items-center justify-center w-10 duration-300 group-hover:scale-150 aspect-square group-hover:shadow-xl group-hover:shadow-purple-200 bg-blue-200 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-100">
              <Image
                className=""
                src={"/images/icons/book.png"}
                layout="fill"
              />
            </span>
            <h3 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
            Build value-added projects and hone your skills.
            </h3>
          </li>
          <li class="mb-10 ml-6 group">
            <span class="absolute flex items-center justify-center w-10 duration-300 group-hover:scale-150 aspect-square group-hover:shadow-xl group-hover:shadow-purple-200 bg-blue-200 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800">
              <Image
                className=""
                src={"/images/icons/target.png"}
                layout="fill"
              />
            </span>
            <h3 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
            Interact with professionals and peers and build meaningful relations.
            </h3>
          </li>
          
        </ol>
      </div>
    </div>
  );
};

export default AboutUs;
