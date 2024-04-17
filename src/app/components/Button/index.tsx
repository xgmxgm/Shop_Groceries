import Image from 'next/image'
import styles from './Button.module.scss'

interface IProps {
	text: string,
	icon: string
}

export const Button = ({ icon,text }: IProps) => {
	return (
		<>
			<button className={styles.Button}><Image src={icon} alt='icon' width={30} height={30} />{text}</button>
		</>
	)
}