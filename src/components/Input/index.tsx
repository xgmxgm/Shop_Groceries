'use client'

import { ChangeEvent, useState } from 'react'
import styles from './Input.module.scss'
import { useDispatch } from 'react-redux'
import { searchGroceri } from '@/store/Slice/GroceriesSlice'

export const Input = () => {
	const [input, setInput] = useState<string>('')

	const dispatch = useDispatch();

	const SearchGroceri = (inputValue: string) => {
		dispatch(searchGroceri(inputValue))
		setInput('')
	}

	return (
		<>
			<input
				type="text"
				className={styles.Input}
				placeholder='Ищите свои продукты...'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					e.key == "Enter" && SearchGroceri(input)
				}}
			/>
			<button
				onClick={() => SearchGroceri(input)}
				className={styles.ButtonSearch}
			>
				<p>Искать</p>
			</button>
		</>
	)
}