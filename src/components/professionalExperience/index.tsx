import { StudyHistory, WorkedCompanyes } from '@/utils';
import ExperienceItem from '../experienceItem'
import { IProfessionalExpProps } from './professionalExp.structure'
import styles from './professionalExperience.module.css'
import { useTranslations } from 'next-intl';

export default function Experience(props: IProfessionalExpProps) {
    const t = useTranslations('index');

    
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
                <div>
                    <h3 className={styles.subtitle}>{t('Experiência')}</h3>
                    {Works}
                </div>
                <div>
                    <h3 className={styles.subtitle}>{t('Educação')}</h3>
                    {Study}
                </div>
            </div>
        </div>
    )
}