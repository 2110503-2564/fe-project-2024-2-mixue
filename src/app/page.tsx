import Banner from '@/components/Banner';
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className='z-10'>
        <Banner/>
        </div>
    </main>
  );
}
