import { ContactData } from '@/utils';
import ContactInfo from '../contactInfo'
import styles from './contact.module.css'
import { IContactProps, IFormDataProps } from './contact.structure'
import Input from '../input';
import React from 'react';
import PrimaryButton from '../primaryButton';
import emailjs from 'emailjs-com';


export default function Contact(props: IContactProps) {
    const [formData, setFormData] = React.useState<IFormDataProps>({ name: '', email: '', phone: '', subject: '', message: '' });

    const ContactOptions = ContactData.map((item, index) => (
        <div key={index}> 
        <ContactInfo icon={item.icon} title={item.title} subtitle={item.subtitle} />
        </div>
    ));
    
    const handleSubmit = async () => {
      const templateParams = {
        from_name: formData.name,
        subject: formData.subject,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }
      emailjs.send('service_pvcsxgo', 'template_b9qwfma', templateParams, 'iqqP0JO7raz8NTLu5')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
    };


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
                    <div className={styles.inputs_container}>
                        <Input placeHolder='Seu nome' value={formData.name}  setValue={setFormData} fieldName="name" />
                        <Input placeHolder='Seu Email' value={formData.email}  setValue={setFormData} fieldName="email"  />
                    </div>
                    <div className={styles.inputs_container}>
                        <Input placeHolder='Seu Telefone' value={formData.phone}  setValue={setFormData} fieldName="phone" />
                        <Input placeHolder='Assunto' value={formData.subject}  setValue={setFormData} fieldName="subject"  />
                    </div>
                        <Input isMessageType placeHolder='Escreva sua mensagem' value={formData.message}  setValue={setFormData} fieldName="message"  />
                 <PrimaryButton title='enviar' buttonFunction={ () => handleSubmit()} />
                </div>
            </div>
        </div>
    )
}