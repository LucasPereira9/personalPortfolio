import { ISkillProps } from "./ability.structure";
import styles from './ability.module.css'


export default function Ability(props: ISkillProps) {
    const { icon: Icon } = props;
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Icon className={styles.icon} />
                <h2 className={styles.title}>{props.title}</h2>
                <h2 className={styles.description}>{props.description}</h2>
            </div>
        </div>
    )
}