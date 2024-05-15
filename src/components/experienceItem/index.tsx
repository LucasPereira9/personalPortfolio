import styles from './experienceItem.module.css'
import { FaAppStore } from 'react-icons/fa';
import { IExpItemProps } from './experienceItem.structure';

export default function ExperienceItem(props: IExpItemProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon_content}>
            <FaAppStore className={styles.icon} />
            <div className={styles.separator} />
            </div>
            <div>
                <div className={styles.title_content}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <h3 className={styles.subtitle}>{props.date}</h3>
                </div>
                <div style={{maxWidth: '50vh'}}>
                    <h3 style={{fontSize: '20px', marginBottom: '2vh', marginLeft: '3vh'}} className={styles.title}>{props.company}</h3>
                    <h3 style={{fontSize: '20px', marginLeft: '3vh'}} className={styles.subtitle}>{props.description}</h3>
                </div>
            </div>
        </div>
    )
}