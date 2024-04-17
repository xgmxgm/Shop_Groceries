import { Button } from '../Button'
import styles from './Categories.module.scss'

export const Categories = () => {
	return (
		<div className={styles.Categories}>
			<div className={styles.Content}>
				<div className={styles.Up}>
					<h2 className={styles.Text}>Категории</h2>
					<p className={styles.seeAll}>Увидеть все</p>
				</div>
				<div className={styles.Buttons}>
					<Button icon='fruits.svg' text='Фрукты' />
					<Button icon='vegetables.svg' text='Овощи' />
					<Button icon='pepper.svg' text='Специи' />
				</div>
			</div>
		</div>
	)
}