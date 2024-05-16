import { ContactData } from '@/utils';
import ContactInfo from '../contactInfo'
import styles from './contact.module.css'
import { IContactProps } from './contact.structure'


export default function Contact(props: IContactProps) {

    const ContactOptions = ContactData.map((item, index) => (
        <div key={index}> 
        <ContactInfo icon={item.icon} title={item.title} subtitle={item.subtitle} />
        </div>
    ));


    return (
        <div id={props.id}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>Contato</h3>
                <h3 className={styles.subtitle}>Queremos ouvir de você</h3>
            </div>
            <div className={styles.content}>
                <div>
                    {ContactOptions}
                </div>
                <div>
                    <h3>email entrar em contato</h3>
                </div>
            </div>
        </div>
    )
}