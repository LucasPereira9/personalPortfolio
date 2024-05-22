import { Languages } from '@/utils';
import styles from './responsiveHeader.module.css'
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { IHeaderProps } from '../header/header.structure';
import React from 'react';

export default function ResponsiveHeader(props: IHeaderProps) {
    const [isPending, startTransition] = useTransition()
    const [isOpen, setIsOpen] = React.useState(false as boolean);
    const [scrolled, setScrolled] = React.useState(false as boolean);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const router = useRouter()

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    const languages = Languages.map((item, index) => (
        <div className={styles.language_item} onClick={() => {
             props.flagFunction()
            startTransition(() => {
                router.replace(`/${item.value}`)
            })
        }} key={index}>
        <Image width={35} height={35} src={item.url} alt={'profile'} />
        </div>
    ));
    return (
        <div className={`${styles.container} ${scrolled ? styles.container_scrolled : ''}`}>
            <div className={`${styles.content} ${scrolled ? styles.container_scrolled : ''}`}>
                <div className={styles.languages_container}>
                    {languages}
                </div>
                <div className={styles.menu_container} onClick={toggleMenu}>
                    {isOpen ? <FaTimes color='white' size={40} /> : <FaBars color='white' size={40} />}
                </div> 
            </div>
            
        </div>
    )
}