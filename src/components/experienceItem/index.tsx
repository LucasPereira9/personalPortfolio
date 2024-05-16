import styles from './experienceItem.module.css'
import { FaAppStore } from 'react-icons/fa';
import { IExpItemProps } from './experienceItem.structure';
import { useTranslations } from 'next-intl';

export default function ExperienceItem(props: IExpItemProps) {
    const t = useTranslations('index');
    
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
                <div className={styles.description_content}>
                    <h3 className={styles.company}>{props.company}</h3>
                    <h3 className={styles.description}>{t(props.description)}</h3>
                </div>
            </div>
        </div>
    )
}