import React, { useEffect } from 'react'

import MainLayout from './layouts/MainLayout'
import './styles/global.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMusicListData } from './redux/reducers/musicListReducer/musicListSlice'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('wwww')
		dispatch(fetchMusicListData())
	}, [])

	return (
		<div>
			<MainLayout>
				Card
			</MainLayout>
		</div>
	)
}

export default App
