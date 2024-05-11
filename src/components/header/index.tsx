"use client"
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import NavButton from "../navButton";
import styles from './header.module.css'
import { Languages, navOptions } from "@/utils";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';


export default function Header() {
    const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0 as number);
    const [scrolled, setScrolled] = React.useState(false as boolean);
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    
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
            startTransition(() => {
                router.replace(`/${item.value}`)
            })
        }} key={index}>
        <Image width={45} height={45} src={item.url} alt={'profile'} />
        </div>
    ));

    const handleScrollToSection = (id: string) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
          const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          };
      
          const sections = ['home', 'about', 'services', 'experience', 'contact'];
      
          sections.forEach((id, index) => {
            const element = document.getElementById(id);
            if (element && isElementInViewport(element)) {
              setSelectedButtonIndex(index);
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


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
                     {languages}
                </div>
            </div>
        </div>
    )
}