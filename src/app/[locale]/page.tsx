import Image from 'next/image';
import styles from './page.module.css'
import Header from '@/components/header';
import AnimatedContainer from '@/components/animatedContainer';
 
export default function Index() {
  return (
    <div>
      <Header />
      <div id='home' className={styles.home_container}>
        <div>
            <p className={styles.first_name}>Lucas</p>
            <p className={styles.second_name}>Almeida</p>
            <h2>Desenvolvedor Full-Stack</h2>
        </div>
        <div>
          <AnimatedContainer>
          <Image width={200} height={200} src={'/assets/images/mjonir.jpg'} alt={'profile'} />
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