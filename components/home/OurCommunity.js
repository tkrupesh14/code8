import React from 'react'
import  styles from "../../styles/home/OurCommunity.module.css"

const Ourcommunity = () => {
  return (
    <div className={`${styles.Our_community}`}>
      <div className={`${styles.o_community}`}>
       Join our community for free
      </div>
      <div className={`${styles.o_comm_sponsor_holder}`}>
        <div className={`${styles.o_s_card} ${styles.whatsapp}`}>
          <a href='https://chat.whatsapp.com/Dy5uAVlpzFj3ent90TMjeW' target='_blank'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png" alt="wassup" />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Whats App</p>
          </div> */}
        </div>
        <div className={`${styles.o_s_card} ${styles.linkedin}`}>
          <a href='https://www.linkedin.com/company/code8-connect' target='_blank'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="linkedin" />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Linked in.</p>
          </div> */}
        </div>
        <div className={`${styles.o_s_card} ${styles.discord}`}>
          <a href='http://dsc.gg/code8' target='_blank'>
          <img src="https://www.linuxadictos.com/wp-content/uploads/discord.jpg" alt="discord" />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Discord</p>
          </div> */}
        </div>
        <div className={`${styles.o_s_card} ${styles.instagram}`}>
          <a href='https://instagram.com/codeate.in?igshid=YmMyMTA2M2Y=' target='_blank'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="instagram" />
          </a>
          {/* <div className="card-conte">
            <h2>Join Us On</h2>
            <p>Instagram</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Ourcommunity