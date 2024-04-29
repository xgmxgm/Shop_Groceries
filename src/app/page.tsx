import styles from "./page.module.css";
import { Categories } from '@/components/Categories'
import { Input } from '@/components/Input'
import { GroceriesWidgets } from '@/widgets/GroceriesWidgets'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.Content}>
        <div className={styles.Up}>
          <div>
            <p className={styles.What}>Что ты хочешь найти?</p>
          </div>
          <Input />
        </div>
        <div>
          <Categories />
        </div>
        <div className={styles.GroceriesCards}>
          <GroceriesWidgets />
        </div>
      </div>
    </div>
  );
}