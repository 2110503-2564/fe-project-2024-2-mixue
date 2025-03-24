import Banner from '@/components/Banner';
import styles from "./page.module.css";
import FirstPage from '@/components/firstPageContent';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className='z-10'>
        <Banner/>
        <FirstPage/>
        </div>
    </main>
  );
}
