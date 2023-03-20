import React from "react";
import styles from "../../styles/home/OurCommunity.module.css";

const Ourcommunity = () => {
  return (
    <div className={`${styles.Our_community}`}>
      
      <p className="text-3xl font-semibold px-5">
    The learning you need, the skills you want, the career you deserve.
    </p>
      <p className="max-w-3xl text-xl mx-auto mt-5 mb-5 px-5">
      
      Join our community for free & Kickstart your learning today.
      </p>
      <div className={`${styles.o_comm_sponsor_holder}`}>
        <div className={`${styles.o_s_card} ${styles.whatsapp}`}>
          <a
            href="https://chat.whatsapp.com/Dy5uAVlpzFj3ent90TMjeW"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
              alt="wassup"
            />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Whats App</p>
          </div> */}
        </div>
        <div className={`${styles.o_s_card} ${styles.linkedin}`}>
          <a
            href="https://www.linkedin.com/company/code8-connect"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              alt="linkedin"
            />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Linked in.</p>
          </div> */}
        </div>
        <div className={`${styles.o_s_card} ${styles.discord}`}>
          <a href="http://dsc.gg/code8" target="_blank" rel="noreferrer">
            <img
              src="https://www.linuxadictos.com/wp-content/uploads/discord.jpg"
              alt="discord"
            />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Discord</p>
          </div> */}
        </div>
        <div className={`${styles.o_s_card} ${styles.instagram}`}>
          <a
            href="https://instagram.com/codeate.in?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              alt="instagram"
            />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Instagram</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ourcommunity;
