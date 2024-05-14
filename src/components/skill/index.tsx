import React from 'react';
import styles from './skill.module.css'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { ISkillProps } from './skill.structure';

const Skill = (props: ISkillProps) => {
    const { ref, inView } = useInView({ triggerOnce: false });

    
    const springProps = useSpring({
      width: inView ? `${props.level}%` : '0%',
      from: { width: '0%' },
      config: { duration: 2000 }
    });
    const percentageStyle = useSpring({
        textAlign: inView ? 'right' : 'left',
        width: inView ? '60vh' : '0vh',
        from: { textAlign: 'left', width: '0vh' },
        config: { duration: 2000 }
      });
      const titleStyle = useSpring({
          opacity: inView ? 1 : 0,
          from: { opacity: 0 },
          config: { duration: 1200 }
        });

  return (
    <div className={styles.skill} ref={ref}>
        <animated.div style={titleStyle}>
            <h3 className={styles.skill_title}>{props.title}</h3>
        </animated.div>
        <animated.div className={styles.percentage} style={percentageStyle}>      
            <h3 className={styles.percentage_number}>{props.level}%</h3>
        </animated.div>
        <div className={styles.skill_bar}>
            <animated.div className={styles.skill_level} style={springProps}></animated.div>
        </div>
    </div>
  );
};

export default Skill;