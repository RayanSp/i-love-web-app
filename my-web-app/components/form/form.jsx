import styles from "./form.module.css";

export default function Form() {
  return (
    <>
      <section className={styles.FormSection}>
        <div className={styles.DivForm}>
          <h2>Voeg een talk toe...</h2>  
            <form action="#" className={styles.WebNotes}>
                <input type="text" className={styles.InputTitle} placeholder="We Love Web Title"></input>
                <input type="date" className={styles.InputDate}></input>
                <textarea className={styles.InputNotes} placeholder="Your notes..." cols="20" row="5"></textarea>
                <button type="submit" className={styles.SendBtn}>Submit</button>
            </form>
        </div>
      </section>
    </>
  );
}
