import React from 'react'
import styles from '../styles.module.scss'

const NormalizeNumber = ({ number }) => {
	const splitNumber = number.toString().split('.')

	return (
		<>
			<strong className={styles.integer}>{splitNumber[0]}</strong>
			<strong>.{splitNumber[1]}</strong>
		</>
	)
}

export default NormalizeNumber
