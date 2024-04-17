import styles from "./page.module.css";
import { Input } from './components/Input'
import { Categories } from './components/Categories'
import { GroceriesCard } from './components/GroceriesCard'

export default function Home() {
  return (
    <main className={styles.main}>
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
          <GroceriesCard bgColor='#FFD8B9' title='Aпельсин' price={1.99} img='/fresh-orange.png' bgForbutton='#FFBD87' />
          <GroceriesCard bgColor='#E0FFB0' title='Киви' price={12.99} img='/kiwi_2.webp' bgForbutton='#C3E988' />
          <GroceriesCard bgColor='#F4CDCB' title='Клубника' price={4.99} img='/strawberry.webp' bgForbutton='#F7AAA6' />
          <GroceriesCard bgColor='#C6D3FF  ' title='Черника' price={8.99} img='/blueberries.png' bgForbutton='#A9BAF5' />
        </div>
      </div>
    </main>
  );
}
