import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Mentorstats.module.css'
import Reach from '../assets/images/reach5.png'
import Reach1 from '../assets/images/reach1.png'
import Reach2 from '../assets/images/reach2.png'
import Reach3 from '../assets/images/reach3.png'
import Reach4 from '../assets/images/reach4.png'




const Mentorstats = () => {
  return (
    <div>
      <div className={styles.Stats__head}>Stats</div>
      <div className={styles.Stats__holder}>
        <div className={`${styles.m__stat__block}`}>
          <Image src={Reach} alt=""/>
          <div>
          <div className={styles.MSdata}>50+ </div>
          <div className={styles.MSmetadata}>Colleges</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach1} alt=""/>
        <div>
          <div className={styles.MSdata}>2K+</div>
          <div className={styles.MSmetadata}>Community members</div>
        </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach2} alt=""/>
          <div>
          <div className={styles.MSdata}>500+</div>
          <div className={styles.MSmetadata}>Opportunities created</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach3} alt=""/>
          <div>
          <div className={styles.MSdata}>50+</div>
          <div className={styles.MSmetadata}>Projects Build</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach4} alt=""/>
        <div>
          <div className={styles.MSdata}>10+</div>
          <div className={styles.MSmetadata}>Companies and Partners</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorstats;
