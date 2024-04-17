import styles from './Input.module.scss'

export const Input = () => {
	return (
		<>
			<input className={styles.Input} type="text" placeholder='Ищите свои продукты...' />
		</>
	)
}