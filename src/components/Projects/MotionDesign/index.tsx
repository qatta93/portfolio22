import React from 'react'
import styles from '../../../../public/styles/MotionDesign.module.css';

export const MotionDesign = () => {
  return (
    <div>
      <iframe
        title="Car in motion video player"
        src="/videos/carMobile.mp4"
        sandbox=""
        allowFullScreen
        className={styles.videoFrame__car}>
      </iframe>
      <iframe
        title="Car in motion video player"
        src="/videos/lottie.mp4"
        sandbox=""
        allowFullScreen
        className={styles.videoFrame__lottie}>
      </iframe>
    </div>
  )
}

export default MotionDesign;
