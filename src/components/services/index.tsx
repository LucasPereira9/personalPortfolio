import { IServicesProps } from "./services.structure";
import styles from './services.module.css'
import Ability from "../ability";
import AnimatedContainer from "../animatedContainer";
import { ServicesOptions } from "@/utils";
import AnimatedIcon from "../AnimatedIcon";
import React from "react";
import { useTranslations } from "next-intl";


export default function Services(props: IServicesProps) {
    const t = useTranslations('index');

    const [hoveredItems, setHoveredItems] = React.useState(Array(ServicesOptions.length).fill(false));

    const handleMouseEnter = (index: number) => {
        const updatedHoveredItems = Array(ServicesOptions.length).fill(false);
        updatedHoveredItems[index] = true;
        setHoveredItems(updatedHoveredItems);
      };
      
      const handleMouseLeave = () => {
        setHoveredItems(Array(ServicesOptions.length).fill(false));
      };

    const ServicesList = ServicesOptions.map((item, index) => (
        <AnimatedContainer 
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}> 
           <Ability serviceIcon={<AnimatedIcon icon={item.icon} isHovered={hoveredItems[index]} />} isServices icon={item.icon} title={item.title} description={item.description} />
        </AnimatedContainer>
    ));
    return (
        <div className={styles.container} id={props.id}>
            <div className={styles.title_container}>
                 <h3 className={styles.title}>{t('Serviços')}</h3>
                 <h3 className={styles.subtitle}>{t('O que eu faço pelos meus clientes')}</h3>
            </div>
            <div className={styles.service_content}>
                {ServicesList}
            </div>
        </div>
    )
}