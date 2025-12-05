import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Corso Command Dashboard</h1>
        <p>Welcome to the command dashboard. This application uses Vercel Web Analytics.</p>
      </div>
    </main>
  );
}
