import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import styles from "../styles/Build/Stats.module.css";
import Mentorle from '../assets/images/community-partners/mentorle.jpeg'
import SosTech from '../assets/images/community-partners/sos_tech.jpeg'
import Acc from '../assets/images/community-partners/acc.jpeg'
import Algocs from '../assets/images/community-partners/algocs.jpeg'
import Befikra from '../assets/images/community-partners/befikra.jpeg'
import BlockchainClub from '../assets/images/community-partners/blockchain_club.jpeg'
import GamingGeeks from '../assets/images/community-partners/gaming_geeks.jpeg'
import MLE from '../assets/images/community-partners/MLE.jpeg'
import SheBuilds from '../assets/images/community-partners/she_builds.jpeg'
import Web3P from '../assets/images/community-partners/web3p.jpeg'
import Codedu from '../assets/images/community-partners/codedu.jpeg'
import Chatrashala from '../assets/images/community-partners/chatrashala.jpeg'


const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="z-10 mt-20 pb-20"
    >
      <div className="title text-2xl mb-10">Our Community Partners</div>
      <motion.div
        initial={{ x: -100, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles.Stats_holder}
      >
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <Image
              src={Mentorle}
              alt=""
              width='100'
              height='100'
            />
          </div>
          <div className={styles.stats_datatype}>Mentorle</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={SosTech}
              alt=""
              width='100'
              height='100'
            />
            <div className={styles.stats_datatype}>Sos Tech</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={Acc}
              alt=""
              width='160'
              height='100'
            />
            <div className={styles.stats_datatype}>TCS</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={Algocs}
              alt=""
              width='100'
              height='100'
            />
            <div className={styles.stats_datatype}>Algocs</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={Befikra}
              alt=""
              width='100'
              height='100'
            />
            <div className={styles.stats_datatype}>Befikra</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={BlockchainClub}
              alt=""
              width='280'
              height='100'
            />
            <div className={styles.stats_datatype}>Blockchain Club</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={GamingGeeks}
              alt=""
              width='100'
              height='100'
            />
            <div className={styles.stats_datatype}>Gaming Geeks</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={MLE}
              alt=""
              width='100'
              height='100'
            />
            <div className={styles.stats_datatype}>Mighty IT Explorer</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={SheBuilds}
              alt=""
              width='100'
              height='100'
            />
          </div>
          <div className={styles.stats_datatype}>She Builds</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={Web3P}
              alt=""
              width='100'
              height='100'
            />
          </div>
          <div className={styles.stats_datatype}>Web3Punjab</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={Codedu}
              alt=""
              width='100'
              height='100'
            />
          </div>
          <div className={styles.stats_datatype}>Codedu</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
          <Image
              src={Chatrashala}
              alt=""
              width='180'
              height='100'
            />
          </div>
          <div className={styles.stats_datatype}>Chatrashala</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
