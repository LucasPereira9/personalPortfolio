"use client"
import Image from 'next/image';
import styles from './page.module.css'
import Header from '@/components/header';
import AnimatedContainer from '@/components/animatedContainer';
import PrimaryButton from '@/components/primaryButton';
 
export default function Index() {

  const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
};
  return (
    <div>
      <Header />
      <div id='home' className={styles.home_container}>
        <div>
            <p className={styles.first_name}>Lucas</p>
            <p className={styles.second_name}>Almeida</p>
            <h2>Desenvolvedor Full-Stack</h2>
            <div className={styles.button_container}>
               <PrimaryButton buttonFunction={() => handleScrollToSection('contact')} title='Entrar em Contato' />
            </div>
        </div>
        <div className={styles.profile_picture}>
          <AnimatedContainer>
          <Image style={{borderRadius: '15vh'}} width={430} height={500} src={'/assets/images/lucas_perfil.png'} alt={'profile'} />
          </AnimatedContainer>
        </div>
      </div>
      <div  style={{height: '50vh'}} id='about' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>Sobre</p>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div style={{height: '50vh'}} id='services' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>serviços</p>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div style={{height: '50vh'}} id='experience' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>experiencia profissional</p>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div style={{height: '50vh'}} id='contact' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>contato</p>
        </div>
      </div>
    </div>
  )
}