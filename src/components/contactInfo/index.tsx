import { useTranslations } from 'next-intl';
import styles from './contactInfo.module.css'
import { IContactInfoProps } from './contactInfo.structure';

export default function ContactInfo(props: IContactInfoProps) {
    
    const t = useTranslations('index');
    const { icon: Icon } = props;

    return (
        <div className={styles.container}>
            <div className={styles.icon_content}>
                <Icon className={styles.icon} />
            </div>
            <div className={styles.title_content}>
                <h3 className={styles.title}>{t(props.title)}</h3>
                <h3 className={styles.subtitle}>{props.subtitle}</h3>
            </div>
        </div>
    )
}