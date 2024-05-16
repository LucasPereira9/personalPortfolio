"use client"
import Image from 'next/image';
import styles from './page.module.css'
import Header from '@/components/header';
import AnimatedContainer from '@/components/animatedContainer';
import PrimaryButton from '@/components/primaryButton';
import { useTranslations } from 'next-intl';
import { Abilities, Skills } from '@/utils';
import Ability from '@/components/ability';
import About from '@/components/about';
import React from 'react';
import Skill from '@/components/skill';
import Services from '@/components/services';
import Experience from '@/components/professionalExperience';
 
export default function Index() {
  const [changingLanguage, setChangingLanguage] = React.useState(true as boolean);
  
  const t = useTranslations('index');
  
  const AbilitiesOptions = Abilities.map((item, index) => (
    <AnimatedContainer key={index}> 
       <Ability icon={item.icon} title={item.title} description={item.description} />
    </AnimatedContainer>
));
const SkillsOptions = Skills.map((item, index) => (
    <div key={index}> 
      <Skill title={item.title} level={item.level} />
    </div>
));

  const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
};

  React.useEffect(() => {
    if (changingLanguage) {
      setTimeout(() => {
          setChangingLanguage(false)
        }, 300);
    }
  },[changingLanguage])


  return (
    <div className={`${changingLanguage ? styles.changing_language : styles.container}`}>
      <Header flagFunction={() => setChangingLanguage(true) }
       />
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
        <div className={styles.habilities_container}>
              {AbilitiesOptions}
        </div>
      <div className={styles.about_container}>
        <div className={styles.about_title_content}>
          <h2 className={styles.about_subtitle}>{t('Um apaixonado por código')}</h2>
        </div>
       <About id='about' />
      </div>
      <div className={styles.skills_container}>
            <h1 className={styles.title}>{t('HABILIDADES')}</h1>
            <h3 className={styles.subtitle}>{t('Eu trabalho duro para melhorar minhas habilidades regularmente')}</h3>
            <div className={styles.skills_content}>
                {SkillsOptions}
            </div>
      </div>
      <div className={styles.personal_info_container}>
        <Services id='services' />
      </div>
      <div className={styles.personal_info_container}>
        <Experience id='experience' />
        <div>
        </div>
      </div>
      <div style={{marginTop: '90vh', backgroundColor: 'red', height: '200vh'}} id='contact' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>contato</p>
        </div>
      </div>
    </div>
  )
}