import React from 'react'
import styles from '../../../../public/styles/MotionDesign.module.css';
import Lottie from "lottie-react";
import roomAnimationData from "./room.json";
import girlAnimationData from "./girl.json";

export const MotionDesign = () => {
  return (
    <div>
      <Lottie animationData={roomAnimationData} loop={true} />
      <Lottie animationData={girlAnimationData} loop={true} className={styles.lottie}/>
      <iframe
        title="Car in motion video player"
        src="/videos/carMobile.mp4"
        sandbox=""
        allowFullScreen
        className={styles.videoFrame__car}
        loading="lazy"
        >
      </iframe>
    </div>
  )
}

export default MotionDesign;
