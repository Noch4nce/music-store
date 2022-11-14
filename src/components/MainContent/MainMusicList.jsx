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

	console.log(musicListData, 'musicListData')

	return (
		<div>
			<MusicBlock />
		</div>
	)
}

export default MainMusicList
