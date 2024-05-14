import React from 'react';
import styles from './animatedIcon.module.css';

const AnimatedIcon = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`${styles.white_ball_container} ${isHovered ? styles.centered : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${styles.icon} ${isHovered ? styles.centered : ''}`}>
       
       <h1>ICONEEE</h1>
      </div>
      <div className={styles.white_ball}></div>
    </div>
  );
};

export default AnimatedIcon;