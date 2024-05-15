"use client"
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import NavButton from "../navButton";
import styles from './header.module.css'
import { Languages, navOptions } from "@/utils";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import { IHeaderProps } from "./header.structure";


export default function Header(props: IHeaderProps) {
    const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0 as number);
    const [scrolled, setScrolled] = React.useState(false as boolean);
    const [clicked, setClicked] = React.useState(false as boolean);
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    
    const handleScrollToSection = (id: string) => {
        setClicked(true)
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setTimeout(() => {
            setClicked(false)
            }, 1000);
    };

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

    const languages = Languages.map((item, index) => (
        <div className={styles.language_item} onClick={() => {
            props.flagFunction()
            startTransition(() => {
                router.replace(`/${item.value}`)
            })
        }} key={index}>
        <Image width={40} height={40} src={item.url} alt={'profile'} />
        </div>
    ));


    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
            if (!clicked) {
            const sections = ['home', 'about', 'services', 'experience', 'contact'];
            let currentSectionIndex = 0;
  
            sections.forEach((id, index) => {
                const element = document.getElementById(id);
                    if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 0) {
                        currentSectionIndex = index;
                    }
            }
      });
            setSelectedButtonIndex(currentSectionIndex);
            }
        };
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [clicked]);


    return (
        <div className={`${styles.container} ${scrolled ? styles.container_scrolled : ''}`}>
            <h1 />
            <div className={styles.content}>
                <div  className={styles.navOptions_content}>
                    {navigationOptions}
                </div>
                    <div className={styles.separator} />
                <div className={styles.social_media_content}>
                    <div style={{display: 'flex'}}>
                        <NavButton buttonFunction={() => window.open('https://www.linkedin.com/in/lucas-almeida-5280b9206', '_blank')}
                        icon={<AiFillLinkedin className={styles.social_media_icon} />}  />
                        <NavButton buttonFunction={() => window.open('https://github.com/LucasPereira9?tab=repositories', '_blank')}
                        icon={<AiFillGithub className={styles.social_media_icon} />}  />
                    </div>
                    <div className={styles.separator} />
                        {languages}
                </div>
            </div>
        </div>
    )
}