import { StudyHistory, WorkedCompanyes } from '@/utils';
import ExperienceItem from '../experienceItem'
import { IProfessionalExpProps } from './professionalExp.structure'
import styles from './professionalExperience.module.css'
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function Experience(props: IProfessionalExpProps) {
    const t = useTranslations('index');
    const [refLeft, inViewLeft] = useInView({triggerOnce: false});
    const [refRight, inViewRight] = useInView({triggerOnce: false});

    const leftContainerProps = useSpring({
        opacity: inViewLeft ? 1 : 0,
        transform: inViewLeft ? 'translateX(0px)' : 'translateX(-15px)',
        from: { opacity: 0, transform: 'translateX(-15px)' },
        config: { duration: 1000 },
      });
    const rightContainerProps = useSpring({
        opacity: inViewRight ? 1 : 0,
        transform: inViewRight ? 'translateX(0px)' : 'translateX(50px)',
        from: { opacity: 0, transform: 'translateX(50px)' },
        config: { duration: 1000 },
      });

    
    const Works = WorkedCompanyes.map((item, index) => (
        <div key={index}>
            <ExperienceItem title={item.title} date={item.date} company={item.company} description={item.description} />
        </div>
    ));
    const Study = StudyHistory.map((item, index) => (
        <div key={index}>
            <ExperienceItem title={item.title} date={item.date} company={item.company} description={item.description} />
        </div>
    ));

    return (
        <div className={styles.container} id={props.id}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>{t('Resumo')}</h3>
                <h3 className={styles.subtitle}>{t('Um pouco do meu trajeto')}</h3>
            </div>
            <div className={styles.content}>
                <animated.div ref={refLeft} style={leftContainerProps}>
                    <h3 className={styles.subtitle}>{t('Experiência')}</h3>
                    {Works}
                </animated.div>
                <animated.div ref={refRight} style={rightContainerProps}>
                    <h3 className={styles.subtitle}>{t('Educação')}</h3>
                    {Study}
                </animated.div>
            </div>
        </div>
    )
}