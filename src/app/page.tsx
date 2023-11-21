import styles from './page.module.css';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />

      <div className={styles.separator}></div>

      <Footer />

      {/*<img src="./image.png" width={250}/>*/}
      {/*<img src="./acm-logo.png" width={250}/>*/}
    </main>
  );
}
