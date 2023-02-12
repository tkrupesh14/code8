import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/Build/Stats.module.css";

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="z-10 mt-20 pb-20"
    >
      <div className="title text-5xl mb-10">Our Mentors Works At</div>
      <motion.div
        initial={{ x: -100, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles.Stats_holder}
      >
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5d825aa26de3150009a4616c/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"
              alt=""
            />
          </div>
          <div className={styles.stats_datatype}>Amazon</div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://sambadenglish.com/wp-content/uploads/2020/09/paytm.png"
              alt=""
            />
            <div className={styles.stats_datatype}>Paytm</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://www.top-employers.com/contentassets/ed7e1b2cb1fd40cab269b2f1839ce5ce/oid00d200000000wi7ids0683y00000jvywbda3y000000iazmsgikkcyh5cad4etln20g6hz3b1gdurj453kqqoqlxgaaspdffalse3?format=jpeg&bgcolor=white&quality=75&height=75"
              alt=""
              className="bg-white"
            />
            <div className={styles.stats_datatype}>TCS</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://financialit.net/sites/default/files/hitachi_vantara_0.jpg"
              alt=""
            />
            <div className={styles.stats_datatype}>Hitachi Vantara</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://www.temenos.com/wp-content/uploads/2019/06/cognizant-logo.png"
              alt=""
            />
            <div className={styles.stats_datatype}>Cognizant</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png"
              alt=""
            />
            <div className={styles.stats_datatype}>Infosys</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img src="https://brc.org.uk/media/675924/deloitte.png" alt="" />
            <div className={styles.stats_datatype}>Deloitte</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://i.gadgets360cdn.com/large/Teos_website_small_1650287397786.jpg"
              alt=""
            />
            <div className={styles.stats_datatype}>Tezos India</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={styles.stats_block}>
          <div className={styles.stats_data}>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5c13d2f64bbe6f0f2aa26233/0x0.jpg?format=jpg&crop=416,416,x0,y0,safe&height=416&width=416&fit=bounds"
              alt=""
            />
          </div>
          <div className={styles.stats_datatype}>Cisco</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
