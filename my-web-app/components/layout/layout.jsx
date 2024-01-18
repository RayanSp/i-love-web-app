import styles from "./Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.Header}>
        <section className={styles.Section}>
          <h1 className={styles.SectionTitle}>
            I <span className={styles.SpanText}>LOVE</span> THE WEB
          </h1>
          <p className={styles.SectionText}>
            During school, I had the privilege of attending highly engaging
            talks. I've written a smaal summary of each session below.
          </p>
        </section>
      </header>
      <main>{children}</main>
    </>
  );
}
