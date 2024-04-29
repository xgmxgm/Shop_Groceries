'use client'

import { GroceriesCard } from '@/components/GroceriesCard'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store';
import styles from './Groceries.module.scss'

export const GroceriesWidgets = () => {
	const Groceries = useSelector((state: RootState) => state.Groceries)

	return (
		<>
			<div className={styles.Groceries}>
				<div className={styles.Content}>
					{
						Groceries.map((Groceri, index) => <GroceriesCard key={index} type={Groceri.type} bgColor={Groceri.bgColor} title={Groceri.title} price={Groceri.price} img={Groceri.img} bgForbutton={Groceri.bgForbutton} forWhat='shop' id={Groceri.id} />)
					}
				</div>
			</div>
		</>
	)
}