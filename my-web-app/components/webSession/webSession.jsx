import styles from "./WebSession.module.css";

export default function WebSession() {
  return (
    <>
      <main>
        <section className={styles.webSection}>
            <img
              className={styles.img}
              src="/scrum.jpg"
              alt="picture of scrum methode"
            ></img>
          <h2>Scrum crash course</h2>
        </section>
      </main>
    </>
  );
}
