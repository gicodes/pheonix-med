import styles from "./page.module.css";
import Overview from "./index/overview";
import Footer from "./index/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Overview />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
