import styles from "./Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.Header}>
        <section className={styles.Section}>
          <h1 className={styles.WebTitle}>
            <span>I</span>
            {" " }
            <span className={styles.SpanText}>L</span>
            <span className={styles.SpanText}>O</span>
            <span className={styles.SpanText}>V</span>
            <span className={styles.SpanText}>E</span>
            {" " }
            <span>T</span>
            <span>H</span>
            <span>E</span>
            {" " }
            <span>W</span>
            <span>E</span>
            <span>B</span>
          </h1>
          <p className={styles.SectionText}>
            During school, I had the privilege of attending highly engaging
            talks. I've written a small summary of each session below.
          </p>
        </section>
      </header>
      <main>{children}</main>
    </>
  );
}
