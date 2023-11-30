import styles from './socials.module.css';
import Image from 'next/image';

export default function Socials() {
  return (
    <div className={styles.socialsContainer}>
      <a className={styles.socialItem} href="https://acmurl.com/instagram" target="_blank">
        <img src="./instagram.svg" alt="Instagram Logo" className={styles.socialImage} />
      </a>

      <a className={styles.socialItem} href="https://acmurl.com/facebook" target="_blank">
        <img src="./facebook.svg" alt="Facebook Logo" className={styles.socialImage} />
      </a>

      <a className={styles.socialItem} href="https://acmurl.com/discord" target="_blank">
        <img src="./discord.svg" alt="Discord Logo" className={styles.socialImage} />
      </a>
    </div>
  );
}
