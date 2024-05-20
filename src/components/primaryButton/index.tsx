"use client"
import { IPrimaryButtonProps } from "./primaryButton.structure";
import styles from './primaryButton.module.css'
import { Oval } from 'react-loader-spinner';


export default function PrimaryButton(props: IPrimaryButtonProps) {
    return (
        <div onClick={props.buttonFunction} className={styles.container}>
            {props.isLoading ? 
            <Oval
                color="#000000"
                height={35}
                width={35}
            /> 
          : 
            <h2 className={styles.title}>{props.title}</h2>}
        </div>
    )
}