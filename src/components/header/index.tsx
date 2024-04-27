"use client"
import React from "react";
import NavButton from "../navButton";
import styles from './header.module.css'
import { navOptions } from "@/utils";
import { useTranslations } from "next-intl";


export default function Header() {
    const t = useTranslations()
    const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0 as number);
    const [scrolled, setScrolled] = React.useState(false as boolean);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
        <div className={`${styles.container} ${scrolled ? styles.container_scrolled : ''}`}>
            <h1 />
            <div className={styles.content}>
                <div  className={styles.navOptions_content}>
                    {navigationOptions}
                </div>
                <div className={styles.separator} />
                <h2>
                    Redes sociais
                </h2>
            </div>
        </div>
    )
}