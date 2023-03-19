import React from 'react'
import styles from '../../styles/community/Partners.module.css'
import PartnersImage from './PartnersImage';
import Image from 'next/image';

function Partners() {
    console.log(PartnersImage)
  return (
    <div>
        <h1 className="title text-5xl my-10">Our Partners</h1>
      <div className={`${styles.slider}`}>
        <div className={`${styles.slide_track}`}>
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`}/>
                    </div>
                );
            })}
        
        </div>
      </div>
    </div>
  )
}

export default Partners
