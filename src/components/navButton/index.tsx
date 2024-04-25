"use client"
import React from 'react';
import styles from './navButton.module.css';
import { INavButtonProps } from './navButton.structure';
import {useTranslations} from 'next-intl';

export default function NavButton(props: INavButtonProps) {
    
  const t = useTranslations();
    return (
        <div onClick={props.buttonFunction}>
            <h2  className={`${styles.title} ${props.selectedButton ? styles.selectedTitle : ''}`}>{t(props.title)}</h2>
        </div>
    );
}