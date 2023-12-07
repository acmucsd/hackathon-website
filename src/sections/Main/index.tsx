import Link from 'next/link';
import styles from './main.module.css';
export default function Main() {
  return (
    <div className={styles.container}>
      <img src="./image.png" className={styles.image} alt="Logo" />

      <div className={styles.infoContainer}>
        <h1 className={styles.title}>DiamondHacks</h1>
        <h2 className={styles.subtitle}>March 29, 2024 | UC San Diego</h2>

        <p className={styles.description}>
          Join us for a hackathon that&apos;s truly a cut above the rest.
        </p>

        <Link
          className={styles.comingSoon}
          href="https://acmurl.com/diamondhacks-preregister"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get notified when applications are live!
        </Link>
      </div>
    </div>
  );
}
