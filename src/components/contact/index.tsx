import { ContactData } from '@/utils';
import ContactInfo from '../contactInfo'
import styles from './contact.module.css'
import { IContactProps } from './contact.structure'
import Input from '../input';


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
                    <Input />
                    <Input />
                    <Input />
                </div>
            </div>
        </div>
    )
}