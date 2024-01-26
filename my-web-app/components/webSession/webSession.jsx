import styles from "./WebSession.module.css";
import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }

    loadData();
  }, []);
}



export default function WebSession() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isPopupOpen]);

  return (
    <>
      <div id="popup-1" className={`${styles.PopUp} ${isPopupOpen ? styles.active : ''}`}>
        <div className={styles.Overlay} onClick={togglePopup}></div>
        <div className={styles.Content}>
          <button className={styles.CloseBtn} onClick={togglePopup}>
            &times;
          </button>
          <img
            className={styles.ImgCrashCourse}
            src="/scrum.jpg"
            alt="picture of scrum methode"
          ></img>
          <h2 className={styles.ScrumTitle}>Scrum crash course</h2>
          <p className={styles.ScrumDate}>29 November 2023</p>
          <p className={styles.ScrumNotes}>
            Lars gaf een talk over hoe ze bij funda, de plek waar hij werkt, in
            sprints werken. Hier legde hij uit welke fundamentals zij hiervoor
            gebruiken.
          </p>
        </div>
      </div>

      <section className={styles.WebSection}>
        <article className={styles.WebArticle}>
          <img
            className={styles.ImgCrashCourse}
            src="/scrum.jpg"
            alt="picture of scrum methode"
          ></img>
          <h2 className={styles.ScrumTitle}>Scrum crash course</h2>
          <p className={styles.ScrumDate}>29 November 2023</p>
          <p className={styles.ScrumNotes}>
            Lars gaf een talk over hoe ze bij funda, de plek waar hij werkt, in
            sprints werken. Hier legde hij uit welke fundamentals zij hiervoor
            gebruiken.
          </p>
          <button onClick={togglePopup} className={styles.ReadMore}>
            Read More ▶
          </button>
        </article>

        <article className={styles.WebArticle}>
          <img
            className={styles.ImgAccessibility}
            src="/accessbility.webp"
            alt="picture accessibility"
          ></img>
          <h2 className={styles.ScrumTitle}>Accessibility</h2>
          <p className={styles.ScrumDate}>19 Januari 2024</p>
          <p className={styles.ScrumNotes}>
            Fenna gaf een talk over accessiility, hier liet zij zien hoe ze
            accesibility toevoegd aan haar projecten met een aantal voorbeelden.
          </p>
          <button onClick={togglePopup} className={styles.ReadMore}>
            Read More ▶
          </button>
        </article>

        <article className={styles.WebArticle}>
          <img
            className={styles.ImgCrashCourse}
            src="/scrum.jpg"
            alt="picture of scrum methode"
          ></img>
          <h2 className={styles.ScrumTitle}>We Love Web</h2>
          <p className={styles.ScrumDate}>29 November 2023</p>
          <p className={styles.ScrumNotes}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={togglePopup} className={styles.ReadMore}>
            Read More ▶
          </button>
        </article>
      </section>
    </>
  );
}
