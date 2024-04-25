"use client"
import React from "react";
import NavButton from "../navButton";
import styles from './header.module.css'
import { navOptions } from "@/utils";
import { useTranslations } from "next-intl";


export default function Header() {
    const t = useTranslations()
    const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0);

    const navigationOptions = navOptions.map((item, index) => (
        <div key={index}> 
            <NavButton 
                title={item.title} 
                buttonFunction={() => setSelectedButtonIndex(index)}
                selectedButton={index === selectedButtonIndex}
            />
        </div>
    ));

    return (
        <div className={styles.container}>
            <h1>
                {t('Cursos')}
            </h1>
            <div  className={styles.navOptionsContent}>
                {navigationOptions}
            </div>
        </div>
    )
}