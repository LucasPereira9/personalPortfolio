import { IServicesProps } from "./services.structure";
import styles from './services.module.css'
import Ability from "../ability";
import AnimatedContainer from "../animatedContainer";
import { ServicesOptions } from "@/utils";
import PrimaryButton from "../primaryButton";


export default function Services(props: IServicesProps) {

    const ServicesList = ServicesOptions.map((item, index) => (
        <AnimatedContainer key={index}> 
           <Ability serviceIcon={<PrimaryButton />} isServices icon={item.icon} title={item.title} description={item.description} />
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