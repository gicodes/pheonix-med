import { Metadata } from 'next';
import styles from "./page.module.css";
import Overview from "./index/overview";
import Page from "./assets/page-template";
import IndexFooter from './index/box&cards/index-footer';

export const generateMetadata = (): Metadata => {
  return {
    title: "Phoenix Medicals - Welcome to your all-in-one Medical Center",
    description: "Clients can consult with freelancing doctors through our platform for a fee",
  };
};

export default function Home() {
  return (
    <Page>
      <div className={styles.page}>
        <main className={styles.main}>
          <Overview />
        </main>

        <footer className={styles.footer}>
          <IndexFooter />
        </footer>
      </div>
    </Page>
  );
}
