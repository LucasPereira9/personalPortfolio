import { IAbilitiyProps } from "./ability.structure";
import styles from './ability.module.css'
import { useTranslations } from "next-intl";


export default function Ability(props: IAbilitiyProps) {
    const t = useTranslations('index');
    const { icon: Icon } = props;
    const isServiceType = props.isServices

    return (
        <div style={{textAlign: isServiceType ? 'center' : undefined}} className={styles.container}>
            <div style={{display: isServiceType ? 'flex' : undefined, flexDirection: 'column', alignItems: 'center' }} className={styles.content}>
                {isServiceType ? props.serviceIcon : <Icon className={styles.icon} /> }
                <h2 className={styles.title}>{t(props.title)}</h2>
                <h3 className={styles.subtitle}>{t(props.description)}</h3>
            </div>
        </div>
    )
}