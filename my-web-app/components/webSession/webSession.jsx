import styles from "./webSession.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <section className={styles.webSection}>
          <link href="#">
            <img
              className={styles.img}
              src="/scrum.jpg"
              alt="picture of scrum methode"
            ></img>
          </link>
          <h2>Scrum crash course</h2>
        </section>
      </main>
    </>
  );
}
