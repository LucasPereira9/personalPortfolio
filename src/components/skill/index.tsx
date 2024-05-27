import React from 'react';
import styles from './skill.module.css'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { ISkillProps } from './skill.structure';

const Skill = (props: ISkillProps) => {
    const { ref, inView } = useInView({ triggerOnce: false });
    const [isPhoneType, setIsPhoneType] = React.useState(false as boolean);

    
        const springProps = useSpring({
          width: inView ? `${props.level}%` : '0%',
          from: { width: '0%' },
          config: { duration: 2000 }
        });

        const percentageStyle = useSpring({
          justifyContent: inView ? 'flex-end' : 'flex-start',
          width: inView ? (isPhoneType ? '40vh' : '60vh') : '0vh',
          from: { justifyContent: 'flex-start', width: '0vh' },
          config: { duration: 2000 }
      });

      const titleStyle = useSpring({
          opacity: inView ? 1 : 0,
          from: { opacity: 0 },
          config: { duration: 1200 }
        });

        React.useEffect(() => {
          function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1300) {
              setIsPhoneType(true);
            } else {
              setIsPhoneType(false);
            }
          }
      
          window.addEventListener('resize', handleResize);
      
          handleResize();
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, [isPhoneType]);

  return (
    <div className={styles.skill} ref={ref}>
        <animated.div style={titleStyle}>
            <h3 className={styles.skill_title}>{props.title}</h3>
        </animated.div>
        <animated.div className={styles.percentage} style={percentageStyle}>      
            <h3 className={styles.percentage_number}>{props.level}%</h3>
        </animated.div>
        <div style={{width: isPhoneType ? '40vh' : ''}} className={styles.skill_bar}>
            <animated.div className={styles.skill_level} style={springProps}></animated.div>
        </div>
    </div>
  );
};

export default Skill;