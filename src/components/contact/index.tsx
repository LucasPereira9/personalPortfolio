import { ContactData } from '@/utils';
import ContactInfo from '../contactInfo'
import styles from './contact.module.css'
import { IContactProps, IFormDataProps } from './contact.structure'
import Input from '../input';
import React from 'react';
import PrimaryButton from '../primaryButton';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';


export default function Contact(props: IContactProps) {
    const [formData, setFormData] = React.useState<IFormDataProps>({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isLoading, setIsLoading] =  React.useState(false as boolean)
    const [isDisabled, setIsDisabled] =  React.useState(true as boolean)
    const t = useTranslations('index');


    const ContactOptions = ContactData.map((item, index) => (
        <div key={index}> 
        <ContactInfo icon={item.icon} title={item.title} subtitle={item.subtitle} />
        </div>
    ));
    
    const handleSubmit = async () => {
        setIsLoading(true)
      const templateParams = {
        from_name: formData.name,
        subject: formData.subject,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }
      emailjs.send('service_pvcsxgo', 'template_b9qwfma', templateParams, 'iqqP0JO7raz8NTLu5')
      .then((response) => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setIsLoading(false)
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        setIsLoading(false)
        console.error('Email failed to send:', error);
      });
    };

    React.useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
        setIsDisabled(!allFieldsFilled)
    }, [formData]);


    return (
        <div id={props.id}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>{t('Contato')}</h3>
                <h3 className={styles.subtitle}>{t('Queremos ouvir de você')}</h3>
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
                        <Input isNumber placeHolder='Seu Telefone' value={formData.phone}  setValue={setFormData} fieldName="phone" />
                        <Input placeHolder='Assunto' value={formData.subject}  setValue={setFormData} fieldName="subject"  />
                    </div>
                        <Input isMessageType placeHolder='Escreva sua mensagem' value={formData.message}  setValue={setFormData} fieldName="message"  />
                        <PrimaryButton isDisabled={isDisabled} isLoading={isLoading} title='Enviar' buttonFunction={ () => handleSubmit()} />
                </div>
            </div>
        </div>
    )
}