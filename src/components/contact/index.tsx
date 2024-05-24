import { ContactData } from '@/utils';
import ContactInfo from '../contactInfo'
import styles from './contact.module.css'
import { IContactProps, IFormDataProps } from './contact.structure'
import Input from '../input';
import React from 'react';
import PrimaryButton from '../primaryButton';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import Modal from '../modal';
import LottieAnimation from '../lottieAnimation';


export default function Contact(props: IContactProps) {
    const t = useTranslations('index');
    
    const [formData, setFormData] = React.useState<IFormDataProps>({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isLoading, setIsLoading] =  React.useState(false as boolean)
    const [isDisabled, setIsDisabled] =  React.useState(true as boolean)
    const [errorSendingEmail, setErrorSendingEmail] =  React.useState(false as boolean)
    const [isModalOpen, setIsModalOpen] =  React.useState(false as boolean)

    const [refLeft, inViewLeft] = useInView({triggerOnce: false});
    const [refRight, inViewRight] = useInView({triggerOnce: false});


    const leftContainerProps = useSpring({
        opacity: inViewLeft ? 1 : 0,
        from: { opacity: 0},
        config: { duration: 1000 },
      });
    const rightContainerProps = useSpring({
        opacity: inViewRight ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 1000 },
      });



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
      .then(() => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setIsLoading(false)
          setIsModalOpen(true)
      })
      .catch(() => {
        setIsLoading(false)
        setErrorSendingEmail(true)
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
                <animated.div ref={refLeft} style={leftContainerProps}>
                    {ContactOptions}
                </animated.div>
                <animated.div ref={refRight} style={rightContainerProps}>
                    <div className={styles.inputs_container}>
                        <Input placeHolder='Seu nome' value={formData.name}  setValue={setFormData} fieldName="name" />
                        <Input placeHolder='Seu Email' value={formData.email}  setValue={setFormData} fieldName="email"  />
                    </div>
                    <div className={styles.inputs_container}>
                        <Input isNumber placeHolder='Seu Telefone' value={formData.phone}  setValue={setFormData} fieldName="phone" />
                        <Input placeHolder='Assunto' value={formData.subject}  setValue={setFormData} fieldName="subject"  />
                    </div>
                    <div className={styles.button_container}>    
                        <Input isMessageType placeHolder='Escreva sua mensagem' value={formData.message}  setValue={setFormData} fieldName="message"  />
                        {errorSendingEmail &&  <h3 className={styles.error_message}>Erro ao entrar em contato. Tente novamente mais tarde.</h3>}
                       
                        <PrimaryButton isDisabled={isDisabled} isLoading={isLoading} title='Enviar' buttonFunction={ () => handleSubmit()} />
                    </div>
                </animated.div>
            </div>
            <Modal setIsModalOpen={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
              <div className={styles.modal_container}>
                <div className={styles.lottie_container}>
                  <LottieAnimation animationPath="/assets/lottie/letterSend.json" />
                </div>
                  <h3 style={{fontSize: '22px', textAlign: 'center'}} className={styles.subtitle}>Agradecemos seu contato. Responderemos o mais rápido possível!</h3>
                  <div>
                    <PrimaryButton title='Concluído' buttonFunction={() => setIsModalOpen(false)} />
                  </div>
              </div>
            </Modal>
        </div>
    )
}