"use client"

import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'
import styles from './GroceriesCard.module.scss'
import { deleteInCart, setCart } from '@/store/Slice/CartSlice'
import type { IGroceries } from '@/Data/Groceries'

interface IProps {
	id: number,
	type: "vegetables" | "fruit" | "spices",
	img: string,
	title: string,
	price: number,
	bgColor: string,
	bgForbutton: string,
	forWhat: "cart" | "shop",
}

export const GroceriesCard = ({ img, title, price, bgColor, bgForbutton, type, id, forWhat }: IProps) => {
	const dispatch = useDispatch();

	const addInCart = ({ img, title, price, bgColor, bgForbutton, type, id }: IGroceries) => {
		const Groceri: IGroceries = {
			id,
			type,
			img,
			title,
			price,
			bgColor,
			bgForbutton,
		}

		dispatch(setCart(Groceri))
	}

	const DeleteInCart = (id: number) => {
		dispatch(deleteInCart(id))
	}

	return (
		<div className={styles.GroceriesCard} style={{background: bgColor}}>
			<div className={styles.Content}>
				<Image src={img} alt='img' width={100} height={100} />
				<h2 className={styles.Text}>{title}</h2>
				<div className={styles.PriceBlock}>
					<p><span className={styles.Price}>{price}</span><span className={styles.Kg}>/kg тг</span></p>
				</div>
				{
					forWhat == "shop" ?
						<div
							className={styles.CardButton}
							style={{background: bgForbutton}}
							onClick={() => addInCart({img, title, price, bgColor, bgForbutton, type, id})}
						>
							<Image src='plus.svg' alt='plus' width={20} height={20} />
						</div> :
						<div
							className={styles.CardButton}
							style={{background: bgForbutton}}
							onClick={() => DeleteInCart(id)}
						>
							<Image src='plus.svg' alt='plus' width={20} height={20} style={{transform: "rotate(45deg)"}} />
						</div>
				}
			</div>
		</div>
	)
}