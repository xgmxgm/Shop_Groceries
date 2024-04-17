import Image from 'next/image'
import styles from './GroceriesCard.module.scss'

interface IProps {
	img: string,
	title: string,
	price: number,
	bgColor: string,
	bgForbutton: string,
}

export const GroceriesCard = ({ img, title, price, bgColor, bgForbutton }: IProps) => {
	return (
		<div className={styles.GroceriesCard} style={{background: bgColor}}>
			<div className={styles.Content}>
				<Image src={img} alt='img' width={100} height={100} />
				<h2 className={styles.Text}>{title}</h2>
				<div className={styles.PriceBlock}>
					<p><span className={styles.Price}>{price}</span><span className={styles.Kg}>/kg</span></p>
				</div>
				<div className={styles.CardButton} style={{background: bgForbutton}}>
					<Image src='plus.svg' alt='plus' width={20} height={20} />
				</div>
			</div>
		</div>
	)
}