import styles from './about.module.css'

export default function About() {
    return (
    <div>
        <div className={styles.title_content}>
            <h2 className={styles.subtitle}>Um apaixonado por código, sempre buscando soluções inovadoras para desafios complexos.</h2>
        </div>
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
            </div>
        </div>
    </div>
    )
}