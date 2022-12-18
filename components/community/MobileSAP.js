import React from 'react'
import { Button } from '../button/Button'
import styles from '../../styles/home/Community.module.css'
import Image from 'next/image'
import learn from '../../assets/images/Learn.jpeg'


export default function MobileSAP () {
  return (
    <div className={`${styles.mobile_sap}`}>
      <div>
        <h1 className={`${styles.community_h1}`}>Learn, build and collaborate.</h1>
        <div className={`${styles.community_aboutpg}`}>
          <p>
            Learn on the go with diverse community of techies and get ahead in
            your career.
          </p>
          <p>
            We have created a cultured community of techies for you to leverage
            peer to peer learning, collaboration and help.
          </p>
        </div>
        {/* <Button buttonSize="btn--large" buttonColor="blue">
            Join now for free.
          </Button> */}
        <div className={`${styles.community_join_button}`}>
          <Button buttonSize='btn--large' buttonColor='blue'>
            Join now for free
          </Button>
        </div>
      </div>

      <div className={`${styles.Sap_image}`}>
        <Image
          src={learn}
        ></Image>
      </div>
    </div>
  )
}
