"use client"
import { IPrimaryButtonProps } from "./primaryButton.structure";
import styles from './primaryButton.module.css'


export default function PrimaryButton(props: IPrimaryButtonProps) {
    return (
        <div onClick={props.buttonFunction} className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}