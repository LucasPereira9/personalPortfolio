import { ISkillProps } from "./ability.structure";
import styles from './ability.module.css'
import { useTranslations } from "next-intl";


export default function Ability(props: ISkillProps) {
    const t = useTranslations('index');
    const { icon: Icon } = props;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Icon className={styles.icon} />
                <h2 className={styles.title}>{t(props.title)}</h2>
                <h3 style={{fontSize: '24px'}}>{t(props.description)}</h3>
            </div>
        </div>
    )
}