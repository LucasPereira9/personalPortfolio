import { firstComplement, secondComplement } from '@/utils';
import styles from './about.module.css'
import { IAboutProps } from './about.structure';
import PrimaryButton from '../primaryButton';

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

    return (
    <div id={props.id}>
        <div className={styles.content}>
            <div>
                <h2>image part</h2>
            </div>
            <div className={styles.about_content}>
                <h2 className={styles.about_title}>Sobre Mim</h2>
                <h3>Para além do meu papel como desenvolvedor, sou também um pai dedicado, um entusiasta de jogos e um apaixonado por esportes.
                    Enquanto minha família é meu pilar e minha fonte de amor incondicional, encontrei na programação não apenas uma profissão, mas uma verdadeira vocação.
                    Constantemente alinho minha carreira com meus interesses, buscando crescer tanto pessoal quanto profissionalmente a cada dia.
                    Superar-me diariamente é meu objetivo, impulsionado por uma jornada de autodescoberta e aprimoramento constante, que me motiva profundamente.
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
                    <PrimaryButton buttonFunction={() => {}} title='Carregar CV' />
                </div>
            </div>
        </div>
    </div>
    )
}