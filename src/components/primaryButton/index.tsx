"use client"
import { IPrimaryButtonProps } from "./primaryButton.structure";
import styles from './primaryButton.module.css'
import { Oval } from 'react-loader-spinner';
import { useTranslations } from "next-intl";


export default function PrimaryButton(props: IPrimaryButtonProps) {
    const t = useTranslations('index');
    return (
        <div onClick={props.isDisabled ? undefined : props.buttonFunction} className={props.isDisabled ? styles.disabled_container : styles.container}>
            {props.isLoading ? 
            <Oval
                color="#000000"
                height={35}
                width={35}
            /> 
          : 
            <h2 className={styles.title}>{t(props.title)}</h2>}
        </div>
    )
}