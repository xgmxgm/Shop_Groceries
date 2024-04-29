'use client'

import { useSelector } from 'react-redux'
import Image from 'next/image'
import { GroceriesCard } from '@/components/GroceriesCard'
import EmptyCart from "@/../public/EmptyCart.png"
import { RootState } from '@/store'
import styles from './buy.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Buy = () => {
	const CartGroceries = useSelector((state: RootState) => state.Cart);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const route = useRouter();

	const getAllPrice = () => {
		let value: number = 0;

		const GroceriesPrices = CartGroceries.map((Groceri) => Groceri.price);

		GroceriesPrices.forEach((Price) => value += Price);

		return value
	}

	return (
		<>
			<div className={styles.Buy}>
				<div className={styles.Content}>
					<div className={styles.Title}>
						<h2>Купить</h2>
					</div>
					<div className={styles.BuyButtonDiv}>
						{
							CartGroceries.length !== 0 && <button className={styles.BuyButton} onClick={() => setIsModalOpen(true)}>Оплатить</button>
						}
					</div>
					<div className={styles.Groceries}>
						{
							CartGroceries.length !== 0 ?
							CartGroceries.map((Groceri, index) => <GroceriesCard key={index} type={Groceri.type} bgColor={Groceri.bgColor} title={Groceri.title} price={Groceri.price} img={Groceri.img} bgForbutton={Groceri.bgForbutton} forWhat='cart' id={Groceri.id} />) :
							<div className={styles.EmptyCart}>
								<p className={styles.Title}>Пустая корзина !</p>
								<Image src={EmptyCart} alt='EmptyCart' width={200} height={200} priority/>
							</div>
						}
					</div>
					{	isModalOpen &&
						<div className={styles.Modal} onClick={() => setIsModalOpen(false)}>
							<div className={styles.ContentModal} onClick={(e) => e.stopPropagation()}>
								<h3 className={styles.Text}>Купить</h3>
								<p className={styles.Text}>Кол-во продуктов: {CartGroceries.length}</p>
								<p className={styles.Text}>Сумма: {getAllPrice().toFixed(2)}тг</p>
								<button className={styles.BuyButton} onClick={() => route.push("/confirm")}>Купить</button>
							</div>
						</div>
					}
				</div>
			</div>
		</>
	)
}

export default Buy