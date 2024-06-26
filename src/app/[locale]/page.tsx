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
import Contact from '@/components/contact';
import ResponsiveHeader from '@/components/responsiveHeader';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
 
export default function Index() { 
  const { ref, inView } = useInView({triggerOnce: true });
  const t = useTranslations('index');
  const [changingLanguage, setChangingLanguage] = React.useState(true as boolean);
  const [isPhoneType, setIsPhoneType] = React.useState(false as boolean);

  const fadeAbility = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 2000 }
  });
  
      const AbilitiesOptions = Abilities.map((item, index) => (
        <div key={index}>
          <AnimatedContainer> 
            <Ability icon={item.icon} title={item.title} description={item.description} />
          </AnimatedContainer>
        </div>
      ));
      const SkillsOptions = Skills.map((item, index) => (
          <div key={index}> 
            <Skill title={item.title} level={item.level} />
          </div>
      ));

      const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    };
 
      React.useEffect(() => {
        
        if (changingLanguage) {
        setTimeout(() => {
            setChangingLanguage(false)
          }, 500);
      }
        function handleResize() {
          const screenWidth = window.innerWidth;
          if (screenWidth < 1300) {
            setIsPhoneType(true);
            
          } else {
            setIsPhoneType(false);
          }
        }
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [changingLanguage, isPhoneType]);



  return (
    <div className={`${changingLanguage ? styles.changing_language : styles.container}`}>
      {isPhoneType ? <ResponsiveHeader flagFunction={() => setChangingLanguage(true) } /> : <Header flagFunction={() => setChangingLanguage(true) } />}  
      <div id='home' className={styles.home_container}>
        <div className={styles.description_container}>
          <div className={styles.name_container}>
            <p className={styles.first_name}>Lucas</p>
            <p className={styles.second_name}>Almeida</p>
          </div>
            <h2>{t('Desenvolvedor Full-Stack')}</h2>
            <div className={styles.button_container}>
               <PrimaryButton buttonFunction={() => handleScrollToBottom()} title={'Entrar em Contato'} />
            </div>
        </div>
          <AnimatedContainer>
          <Image width={isPhoneType ? 300 : 450} height={isPhoneType ? 340 : 500} src={'/assets/images/lucas_perfil.png'} alt={'profile'} />
          </AnimatedContainer>
      </div>
        <animated.div ref={ref}  style={fadeAbility} className={styles.habilities_container}>
              {AbilitiesOptions}
        </animated.div>
      <div className={styles.about_container}>
        <div className={styles.about_title_content}>
          <h2 className={styles.about_subtitle}>{t('Um apaixonado por código')}</h2>
        </div>
       <About isPhone={isPhoneType} id='about' />
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
      </div>
      <div className={styles.personal_info_container}>
        <Contact id='contact' />
      </div>
      <div className={styles.footer}>
        <footer className={styles.footer_text_style}>
            {t('Desenvolvido por Lucas Almeida © 2024')}
        </footer>
      </div>
    </div>
  )
}