import React from 'react';
// import { Button } from '../../Button';
import Link from 'next/link';
import styles from '../../styles/home/HeroSection.module.css'
import { Button } from '../button/Button.js';

function HeroSection({
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
    
  return (
    <>
      <div className={`${styles.home__hero_section}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.row} ${styles.home__hero_row}`}>
            <div className={`${styles.col}`}>
              <div className={`${styles.home__hero_text_wrapper}`}>
                {/* <div className={`${styles.top_line}`}>{topLine}</div> */}
                <h1 className={`${styles.heading}`}>
                  {headline}
                </h1>
                <p className={`${styles.home__hero_subtitle}`} >
                  {description}
                </p>
                <Link href='/community' passHref>
                  <a>
                    <Button  buttonSize='btn--large' buttonColor='blue'>
                      {buttonLabel}
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className= {`${styles.col}`}>
              <div className={`${styles.home__hero_img_wrapper}`}>
                <img src={img} alt={alt} className={`${styles.home__hero_img}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
