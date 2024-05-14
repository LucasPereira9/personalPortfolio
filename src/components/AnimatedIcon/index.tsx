import React from 'react';
import styles from './animatedIcon.module.css';
import { IAnimatedIconProps } from './animatedIcon.structure';

const AnimatedIcon = (props: IAnimatedIconProps) => {
  
  const { icon: Icon } = props;

  return (
    <div className={styles.ball_container}>
      <div className={`${styles.ball} ${props.isHovered ? styles.ball_hovered : ''}`}>
      <Icon className={`${styles.icon} ${props.isHovered ? styles.icon_transition : ''}`} />
      </div>
    </div>
  );
};

export default AnimatedIcon;