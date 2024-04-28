"use client"
import React from "react";
import NavButton from "../navButton";
import styles from './header.module.css'
import { navOptions } from "@/utils";
import { useTranslations } from "next-intl";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function Header() {
    const t = useTranslations()
    const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0 as number);
    const [scrolled, setScrolled] = React.useState(false as boolean);

    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                buttonFunction={() => {
                    setSelectedButtonIndex(index)
                    handleScrollToSection(item.id)
                }}
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
                <div className={styles.social_media_content}>
                    <NavButton buttonFunction={() => window.open('https://www.linkedin.com/in/lucas-almeida-5280b9206', '_blank')}
                     icon={<AiFillLinkedin className={styles.social_media_icon} />}  />
                    <NavButton buttonFunction={() => window.open('https://github.com/LucasPereira9?tab=repositories', '_blank')}
                     icon={<AiFillGithub className={styles.social_media_icon} />}  />
                </div>
            </div>
        </div>
    )
}