import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './animatedBar.module.css'
import { IAnimatedBarProps } from './animatedBar.structure';

export default function AnimatedBar(props:IAnimatedBarProps) {

  const sidebarAnimation = useSpring({
    height: props.opened ? '252px' : '0px',
    config: { tension: 120, friction: 20 },
  });

  return (
    <animated.div className={styles.bar} style={sidebarAnimation}>
        {props.children}
    </animated.div>
  );
};