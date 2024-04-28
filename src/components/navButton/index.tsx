"use client"
import React from 'react';
import styles from './navButton.module.css';
import { INavButtonProps } from './navButton.structure';
import {useTranslations} from 'next-intl';

export default function NavButton(props: INavButtonProps) {
    
  const t = useTranslations('index');
   return (
        <div onClick={props.buttonFunction}>
            <h2  className={`${styles.title} ${props.selectedButton ? styles.selectedTitle : ''}`}>
                { props.icon ? props.icon : t(props.title)}
            </h2>
        </div>
    );
}