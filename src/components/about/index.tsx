import { firstComplement, secondComplement } from '@/utils';
import styles from './about.module.css'
import { IAboutProps } from './about.structure';
import PrimaryButton from '../primaryButton';
import Image from 'next/image';
import AnimatedContainer from '../animatedContainer';
import { AiOutlineCodepen   } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export default function About(props: IAboutProps) {
    const t = useTranslations('index');
    const [refLeft, inViewLeft] = useInView({triggerOnce: false});
    const [refRight, inViewRight] = useInView({triggerOnce: false});

    const leftContainerProps = useSpring({
        opacity: inViewLeft ? 1 : 0,
        transform: inViewLeft ? 'translateX(0px)' : 'translateX(-15px)',
        from: { opacity: 0, transform: 'translateX(-15px)' },
        config: { duration: 1000 },
      });
    const rightContainerProps = useSpring({
        opacity: inViewRight ? 1 : 0,
        transform: inViewRight ? 'translateX(0px)' : 'translateX(50px)',
        from: { opacity: 0, transform: 'translateX(50px)' },
        config: { duration: 1000 },
      });

    const FirstComplements = firstComplement.map((item, index) => (
        <div key={index}> 
            <h2 className={styles.complement_item}>{t(item.title)}</h2>
            <h3>{item.name}</h3>
        </div>
    ));
    const SecondComplements = secondComplement.map((item, index) => (
        <div key={index}> 
            <h2 className={styles.complement_item}>{t(item.title)}</h2>
            <h3>{item.name}</h3>
        </div>
    ));

    const handleDownload = () => {
        const downloadUrl = '/cvLucas.pdf';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'cvLucas.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    

    return (
    <div id={props.id}>
        <div className={styles.content}>
            <animated.div ref={refLeft} style={leftContainerProps}>
                {!props.isPhone && <div className={styles.icon_container}>
                    <AiOutlineCodepen  className={styles.icon}  />
                </div>
                }
                <AnimatedContainer>
                    <Image width={props.isPhone ? 340 : 720} height={props.isPhone ? 360 : 680} src={'/assets/images/working.png'} alt={'working'} />
                </AnimatedContainer>
                {!props.isPhone && 
                    <div className={styles.experience}>
                        <div className={styles.separator} />
                        <h1 className={styles.experience_year}>4</h1>
                        <h1 className={styles.experience_text}>{t('Anos de Experiência')}</h1>
                    </div>
                }

            </animated.div>
            <animated.div ref={refRight} style={rightContainerProps} className={styles.about_content}>
                <h2 className={styles.about_title}>{t('Sobre Mim')}</h2>
                <h3 className={props.isPhone ? styles.about_description_mobile : undefined}>{t('Como desenvolvedor, equilibro')}</h3>
                <div className={styles.complement}>
                    <div className={styles.complement_content}>
                        {FirstComplements}
                        {props.isPhone && SecondComplements}
                    </div>
                  {!props.isPhone &&
                    <div className={styles.complement_content}>
                     {SecondComplements}
                    </div>
                }
                </div>
                <div className={styles.button_container}>
                    <PrimaryButton buttonFunction={() => handleDownload()} title={'Carregar CV'} />
                </div>
            </animated.div>
        </div>
    </div>
    )
}