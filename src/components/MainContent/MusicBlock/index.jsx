import React from 'react'

import albumCoverImage from '../../../assets/album-covers/daft-punk_random-access-memories.jpg'
import NormalizeNumber from './NormalizeNumber'
import { normalizeNumbers } from '../../../utils/normalizeNumbers'
import styles from './styles.module.scss'

const MusicBlock = ({ musicElement }) => {
	const { name, artist, label, price, rating, year } = musicElement

	const { ratingInteger, ratingFloat, priceInteger, priceFloat } =
		normalizeNumbers(rating, price)

	return (
		<div className={styles.container}>
			<div className={styles.album}>
				<img src={albumCoverImage} alt="albumCover" />

				<div className={styles.albumInfo}>
					<h2>{name}</h2>
					<span className={styles.artistName}>{artist}</span>

					<span className="basicFontStyles">Year: {year}</span>
					<span className="basicFontStyles">Label: {label}</span>
				</div>
			</div>

			<div className={styles.albumIndex}>
				<span className={`basicFontStyles ${styles.rating}`}>
					Rating:{' '}
					<strong className={styles.integer}>{ratingInteger}</strong>
					<strong>.{ratingFloat}</strong>
				</span>
				<span className={`basicFontStyles ${styles.price}`}>
					$<strong className={styles.integer}>{priceInteger}</strong>
					<strong>.{priceFloat}</strong>
				</span>

				{/*<span className={styles.rating}>*/}
				{/*	Rating: <NormalizeNumber number={rating} />*/}
				{/*</span>*/}

				{/*<span className={styles.price}>*/}
				{/*	$<NormalizeNumber number={price} />*/}
				{/*</span>*/}

				<button>Add to cart</button>
			</div>
		</div>
	)
}

export default MusicBlock
