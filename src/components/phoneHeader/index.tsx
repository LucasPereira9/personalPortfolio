import { Languages } from '@/utils';
import styles from './phoneHeader.module.css'
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { IHeaderProps } from '../header/header.structure';
import React from 'react';

export default function PhoneHeader(props: IHeaderProps) {
    const [isPending, startTransition] = useTransition()
    const [isOpen, setIsOpen] = React.useState(false as boolean);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const router = useRouter()

    
    const languages = Languages.map((item, index) => (
        <div style={{marginRight: '10px', marginLeft: '4px'}} onClick={() => {
             props.flagFunction()
            startTransition(() => {
                router.replace(`/${item.value}`)
            })
        }} key={index}>
        <Image width={35} height={35} src={item.url} alt={'profile'} />
        </div>
    ));
    return (
        <div className={styles.container}>
            <div className={styles.languages_container}>
                {languages}
            </div>
            <div onClick={toggleMenu}>
                {isOpen ? <FaTimes color='white' size={40} /> : <FaBars color='white' size={40} />}
            </div>
        </div>
    )
}