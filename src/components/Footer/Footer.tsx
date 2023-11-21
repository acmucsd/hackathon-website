import styles from './footer.module.css';
import Socials from '@/components/Socials/Socials';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={`${styles.buttonsContainer} ${styles.desktop}`}>
        <div className={styles.linksContainer}>
          <a className={styles.linkText} href="#" target="_blank">
            About Us
          </a>
          <a className={styles.linkText} href="#" target="_blank">
            Code of Conduct
          </a>
        </div>

        <a className={styles.logo} href="https://acmucsd.com/" target="_blank">
          <img src="./acm-logo.png" alt="ACM Logo" />
        </a>

        <div className={styles.linksContainer}>
          <a className={styles.linkText} href="#" target="_blank">
            FAQs
          </a>
          <a className={styles.linkText} href="#" target="_blank">
            Sponsor Us
          </a>
        </div>
      </div>

      <div className={`${styles.buttonsContainer} ${styles.mobile}`}>
        <div className={styles.logoContainer}>
          <a className={styles.logo} href="https://acmucsd.com/" target="_blank">
            <img src="./acm-logo.png" alt="ACM Logo" className={styles.logoImage} />
          </a>
        </div>

        <div className={styles.linksContainer}>
          <a className={styles.linkText} href="#" target="_blank">
            About Us
          </a>
          <a className={styles.linkText} href="#" target="_blank">
            Code of Conduct
          </a>
          <a className={styles.linkText} href="#" target="_blank">
            FAQs
          </a>
          <a className={styles.linkText} href="#" target="_blank">
            Sponsor Us
          </a>
        </div>
      </div>

      <p className={styles.message}>Made with ♡ by ACM at UC San Diego</p>

      <Socials />
    </div>
  );
}
