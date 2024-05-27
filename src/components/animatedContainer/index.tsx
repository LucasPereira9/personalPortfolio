import React from 'react';
import styles from './animated.module.css'
import { IAnimatedContainerProps } from './animatedContainer.structure';

const AnimatedContainer = (props: IAnimatedContainerProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
          const container = containerRef.current;
          if (!container) return;

          const boundingRect = container.getBoundingClientRect();
          const centerX = boundingRect.left + boundingRect.width / 2;
          const centerY = boundingRect.top + boundingRect.height / 2;
          const offsetX = e.clientX - centerX;
          const offsetY = e.clientY - centerY;
          const maxRotation = 20;
          const tiltX = (offsetY / boundingRect.height) * maxRotation;
          const tiltY = -(offsetX / boundingRect.width) * maxRotation;
          container.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      const handleMouseLeave = () => {
          const container = containerRef.current;
          if (!container) return;

          container.style.transform = 'none';
      };

      const container = containerRef.current;
      if (!container) return;

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
          if (container) {
              container.removeEventListener('mousemove', handleMouseMove);
              container.removeEventListener('mouseleave', handleMouseLeave);
          }
      };
  }, []);

  return (
    <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} ref={containerRef} className={styles.animated_container}>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default AnimatedContainer;