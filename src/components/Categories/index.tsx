'use client'

import { useDispatch } from 'react-redux'
import { Button } from '../Button'
import styles from './Categories.module.scss'
import { filterGroceries, setGroceries } from '@/store/Slice/GroceriesSlice'

export const Categories = () => {
	const dispatch = useDispatch();

	const FilterGroceries = (type: "vegetables" | "fruit" | "spices") => {
		dispatch(filterGroceries(type))
	}

	return (
		<div className={styles.Categories}>
			<div className={styles.Content}>
				<div className={styles.Up}>
					<h2 className={styles.Text}>Категории</h2>
					<p className={styles.seeAll} onClick={() => dispatch(setGroceries())}>Увидеть все</p>
				</div>
				<div className={styles.Buttons}>
					<Button icon='fruits.svg' text='Фрукты' onClick={() => FilterGroceries('fruit')}  />
					<Button icon='vegetables.svg' text='Овощи' onClick={() => FilterGroceries('vegetables')}  />
					<Button icon='pepper.svg' text='Специи' onClick={() => FilterGroceries('spices')} />
				</div>
			</div>
		</div>
	)
}