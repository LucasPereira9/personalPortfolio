import { firstComplement, secondComplement } from '@/utils';
import styles from './about.module.css'
import { IAboutProps } from './about.structure';
import PrimaryButton from '../primaryButton';
import Image from 'next/image';
import AnimatedContainer from '../animatedContainer';
import { AiOutlineCodepen   } from 'react-icons/ai';

export default function About(props: IAboutProps) {

    const FirstComplements = firstComplement.map((item, index) => (
        <div key={index}> 
            <h2 className={styles.complement_item}>{item.title}</h2>
            <h3>{item.name}</h3>
        </div>
    ));
    const SecondComplements = secondComplement.map((item, index) => (
        <div key={index}> 
            <h2 className={styles.complement_item}>{item.title}</h2>
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
            <div className={styles.icon_container}>
                <AiOutlineCodepen  className={styles.icon}  />
            </div>
            <AnimatedContainer>
                <Image width={720} height={680} src={'/assets/images/working.png'} alt={'working'} />
            </AnimatedContainer>
            <div className={styles.experience_container}>
                <div className={styles.separator} />
                <h1 className={styles.experience_year}>4</h1>
                <h1 className={styles.experience_text}>Anos de Experiência</h1>
            </div>
            <div className={styles.about_content}>
                <h2 className={styles.about_title}>Sobre Mim</h2>
                <h3>Como desenvolvedor, equilibro minha vida com meu papel de pai dedicado, entusiasta de jogos e apaixonado por esportes.
                    Minha família é meu suporte e minha fonte de amor, enquanto a programação se tornou mais do que uma profissão - é minha vocação.
                    Busco constantemente integrar meus interesses à minha carreira, visando crescimento pessoal e profissional.
                    Meu objetivo diário é superar-me, impulsionado por uma jornada de autodescoberta e aprimoramento constante, que me motiva profundamente.
                </h3>
                <div className={styles.complement}>
                    <div className={styles.first_complement_content}>
                    {FirstComplements}
                    </div>
                    <div className={styles.first_complement_content}>
                        {SecondComplements}
                    </div>
                </div>
                <div className={styles.button_container}>
                    <PrimaryButton buttonFunction={() => handleDownload()} title='Carregar CV' />
                </div>
            </div>
        </div>
    </div>
    )
}