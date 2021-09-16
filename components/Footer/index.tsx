import styles from "@styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Coding Assignment made by:&nbsp;
      <a href="https://github.com/fritzschoff" target="_blank" rel="noreferrer">
        Fritzschoff
      </a>
    </footer>
  );
}
