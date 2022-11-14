import React from 'react'

import MainLayout from './layouts/MainLayout'
import MainMusicList from './components/MainContent/MainMusicList'
import './styles/global.scss'

const App = () => {
	return (
		<div>
			<MainLayout>
				<MainMusicList />
			</MainLayout>
		</div>
	)
}

export default App
