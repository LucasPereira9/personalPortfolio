import { IServicesProps } from "./services.structure";
import styles from './services.module.css'
import Ability from "../ability";
import AnimatedContainer from "../animatedContainer";
import { ServicesOptions } from "@/utils";
import AnimatedIcon from "../AnimatedIcon";
import React from "react";


export default function Services(props: IServicesProps) {

    const [hoveredItems, setHoveredItems] = React.useState(Array(ServicesOptions.length).fill(false));

    const handleMouseEnter = (index: number) => {
      const updatedHoveredItems = [...hoveredItems];
      updatedHoveredItems[index] = true;
      setHoveredItems(updatedHoveredItems);
    };
  
    const handleMouseLeave = (index: number) => {
      const updatedHoveredItems = [...hoveredItems];
      updatedHoveredItems[index] = false;
      setHoveredItems(updatedHoveredItems);
    };

    const ServicesList = ServicesOptions.map((item, index) => (
        <AnimatedContainer 
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}> 
           <Ability serviceIcon={<AnimatedIcon icon={item.icon} isHovered={hoveredItems[index]} />} isServices icon={item.icon} title={item.title} description={item.description} />
        </AnimatedContainer>
    ));
    return (
        <div className={styles.container} id={props.id}>
            <div className={styles.title_container}>
                 <h3 className={styles.title}>services</h3>
                 <h3 className={styles.subtitle}>O que eu faço pelos meus clientes</h3>
            </div>
            <div className={styles.service_content}>
                {ServicesList}
            </div>
        </div>
    )
}