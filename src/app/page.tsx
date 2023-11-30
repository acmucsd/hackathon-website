import styles from './page.module.css';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />

      <div className={styles.separator}></div>

      <Footer />
    </main>
  );
}
