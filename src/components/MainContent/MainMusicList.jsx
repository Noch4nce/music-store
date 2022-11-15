import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MusicBlock from './MusicBlock'
import { fetchMusicListData } from '../../redux/reducers/musicListReducer/musicListAsyncActions'

const MainMusicList = () => {
	const dispatch = useDispatch()
	const { musicListData } = useSelector((state) => state.musicListReducer)

	useEffect(() => {
		dispatch(fetchMusicListData())
	}, [])

	return (
		<div>
			{musicListData.length ? (
				musicListData.map((musicElement) => (
					<MusicBlock
						key={musicElement.id}
						musicElement={musicElement}
					/>
				))
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	)
}

export default MainMusicList
