import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchMusicListData } from './redux/reducers/musicListReducer/musicListAsyncActions'
import MainLayout from './layouts/MainLayout'
import './styles/global.scss'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('wwww')
		dispatch(fetchMusicListData())
	}, [])

	return (
		<div>
			<MainLayout>Card</MainLayout>
		</div>
	)
}

export default App
