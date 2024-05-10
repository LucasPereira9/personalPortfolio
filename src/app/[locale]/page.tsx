"use client"
import Image from 'next/image';
import styles from './page.module.css'
import Header from '@/components/header';
import AnimatedContainer from '@/components/animatedContainer';
import PrimaryButton from '@/components/primaryButton';
import { useTranslations } from 'next-intl';
import { Skills } from '@/utils';
import Ability from '@/components/ability';
import About from '@/components/about';
 
export default function Index() {
  
  const t = useTranslations('index');
  
  const AbilitiesOptions = Skills.map((item, index) => (
    <AnimatedContainer key={index}> 
       <Ability icon={item.icon} title={item.title} description={item.description} />
    </AnimatedContainer>
));

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
            <h2>{t('Desenvolvedor Full-Stack')}</h2>
            <div className={styles.button_container}>
               <PrimaryButton buttonFunction={() => handleScrollToSection('contact')} title={t('Entrar em Contato')} />
            </div>
        </div>
          <AnimatedContainer>
          <Image width={480} height={550} src={'/assets/images/lucas_perfil.png'} alt={'profile'} />
          </AnimatedContainer>
      </div>
        <div className={styles.skills_container}>
              {AbilitiesOptions}
        </div>
      <div className={styles.about_container}>
        <div className={styles.about_title_content}>
          <h2 className={styles.about_subtitle}>Um apaixonado por código, sempre buscando soluções inovadoras para desafios complexos.</h2>
        </div>
       <About id='about' />
      </div>
      <div style={{height: '50vh'}} id='services' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>serviços</p>
        </div>
        <div>
        </div>
      </div>
      <div style={{height: '50vh'}} id='experience' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>experiencia profissional</p>
        </div>
        <div>
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