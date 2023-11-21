import styles from './socials.module.css';

export default function Socials() {
  return (
    <div className={styles.socialsContainer}>
      <a className={styles.socialItem} href="https://acmurl.com/instagram" target="_blank">
        <img src="./instagram.png" alt="Instagram Logo" className={styles.socialImage} />
      </a>

      <a className={styles.socialItem} href="https://acmurl.com/facebook" target="_blank">
        <img src="./facebook.png" alt="Facebook Logo" className={styles.socialImage} />
      </a>

      <a className={styles.socialItem} href="https://acmurl.com/discord" target="_blank">
        <img src="./discord.png" alt="Discord Logo" className={styles.socialImage} />
      </a>
    </div>
  );
}
