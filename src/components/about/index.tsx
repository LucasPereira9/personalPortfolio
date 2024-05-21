import { firstComplement, secondComplement } from '@/utils';
import styles from './about.module.css'
import { IAboutProps } from './about.structure';
import PrimaryButton from '../primaryButton';
import Image from 'next/image';
import AnimatedContainer from '../animatedContainer';
import { AiOutlineCodepen   } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

export default function About(props: IAboutProps) {
    const t = useTranslations('index');

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
        <div className={props.isPhone ? styles.content_mobile : styles.content}>
            <div>
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

            </div>
            <div className={styles.about_content}>
                <h2 className={props.isPhone ? styles.about_title_mobile : styles.about_title}>{t('Sobre Mim')}</h2>
                <h3 className={props.isPhone ? styles.about_description_mobile : undefined}>{t('Como desenvolvedor, equilibro')}</h3>
                <div className={styles.complement}>
                    <div className={props.isPhone ? styles.complement_content_mobile : styles.complement_content}>
                        {FirstComplements}
                        {props.isPhone && SecondComplements}
                    </div>
                  {!props.isPhone &&
                    <div className={styles.complement_content}>
                     {SecondComplements}
                    </div>
                }
                </div>
                <div className={props.isPhone ? styles.button_container_mobile : styles.button_container}>
                    <PrimaryButton buttonFunction={() => handleDownload()} title={'Carregar CV'} />
                </div>
            </div>
        </div>
    </div>
    )
}