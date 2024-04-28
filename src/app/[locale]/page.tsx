import Image from 'next/image';
import styles from './page.module.css'
import Header from '@/components/header';
 
export default function Index() {
  return (
    <body>
      <Header />
      <div style={{height: '60%',}} id='home' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>Lucas</p>
            <p className={styles.second_name}>Almeida</p>
            <h2>Desenvolvedor Full-Stack Qualificado</h2>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div  style={{height: '60%',}} id='about' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>Sobre</p>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div style={{height: '60%',}} id='services' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>serviços</p>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div style={{height: '60%',}} id='experience' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>experiencia profissional</p>
        </div>
        <div>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
        </div>
      </div>
      <div style={{height: '60%',}} id='contact' className={styles.personal_info_container}>
        <div>
            <p className={styles.first_name}>contato</p>
        </div>
      </div>
    </body>
  )
}