import { StudyHistory, WorkedCompanyes } from '@/utils';
import ExperienceItem from '../experienceItem'
import { IProfessionalExpProps } from './professionalExp.structure'
import styles from './professionalExperience.module.css'

export default function Experience(props: IProfessionalExpProps) {

    
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
        <div id={props.id}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>Resumo</h3>
                <h3 className={styles.subtitle}>Um pouco do meu trajeto</h3>
            </div>
            <div className={styles.content}>
                <div>
                    <h3 className={styles.subtitle}>Experiência</h3>
                    {Works}
                </div>
                <div>
                    <h3 className={styles.subtitle}>Educação</h3>
                    {Study}
                </div>
            </div>
        </div>
    )
}