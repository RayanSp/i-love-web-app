import styles from "./form.module.css";

export default function Form() {
  return (
    <>
      <section className={styles.FormSection}>
        <fieldset className={styles.FieldsetForm}>
            <form action="#" className={styles.WebNotes}>
                <input type="text" className={styles.InputTitle} placeholder="We Love Web Title"></input>
                <input type="date" className={styles.InputDate}></input>
                <textarea className={styles.InputNotes} placeholder="Your notes..." cols="40" row="5"></textarea>
            </form>
        </fieldset>
      </section>
    </>
  );
}
