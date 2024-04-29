import Image from 'next/image'
import styles from './Button.module.scss'
import { forwardRef } from 'react'

interface IProps {
	text: string,
	icon: string,
	onClick?: any,
}

export const Button = forwardRef<HTMLButtonElement, IProps>((props, ref) => {
	const { icon, text, onClick } = props;

	return (
		<>
			<button ref={ref} onClick={onClick} className={styles.Button}><Image src={icon} alt='icon' width={30} height={30} />{text}</button>
		</>
	)
})