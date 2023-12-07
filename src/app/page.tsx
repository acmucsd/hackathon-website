import styles from './page.module.css';
import Main from '@/sections/Main';
import Footer from '@/sections/Footer';
import FAQ from '@/sections/FAQ';

const Home = () => {
  return (
    <main className={styles.main}>
      <Main />
      <FAQ />
      <div className={styles.separator} />
      <Footer />
    </main>
  );
};

export default Home;
