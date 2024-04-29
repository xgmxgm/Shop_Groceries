'use client'

import { useSelector } from 'react-redux'
import Image from 'next/image'
import { GroceriesCard } from '@/components/GroceriesCard'
import EmptyCart from "@/../public/EmptyCart.png"
import { RootState } from '@/store'
import styles from './cart.module.scss'

const Cart = () => {
	const CartGroceries = useSelector((state: RootState) => state.Cart);

	return (
		<>
			<div className={styles.Cart}>
				<div className={styles.Content}>
					<div className={styles.Title}>
						<h2>Корзина</h2>
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
				</div>
			</div>
		</>
	)
}

export default Cart