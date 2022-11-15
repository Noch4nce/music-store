export const normalizeNumbers = (rating, price) => {
	const splitRating = rating.toString().split('.')
	const splitPrice = price.toString().split('.')

	return {
		ratingInteger: splitRating[0],
		ratingFloat: splitRating[1],
		priceInteger: splitPrice[0],
		priceFloat: splitPrice[1]
	}
}
