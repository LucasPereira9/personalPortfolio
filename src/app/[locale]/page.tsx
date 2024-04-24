import styles from './page.module.css'
import Header from '@/components/header';
 
export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}