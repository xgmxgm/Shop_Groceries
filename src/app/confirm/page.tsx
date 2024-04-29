"use client"

import { useEffect } from 'react'
import styles from './Confirm.module.scss'
import { useRouter } from 'next/navigation'

const Confirm = () => {
	const route = useRouter();

	useEffect(() => {
		setTimeout(() => {
			route.push("/")
		}, 2000)
	})

	return (
		<>
			<div className={styles.Confirm}>
				<div className={styles.Content}>
					<p>Спасибо за покупку !</p>
					<h2>Вы купили.</h2>
				</div>
			</div>
		</>
	)
}

export default Confirm