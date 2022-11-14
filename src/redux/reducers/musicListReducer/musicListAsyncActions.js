import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMusicListData = createAsyncThunk(
	'musicList/fetchData',
	async () => {
		const response = await axios.get(
			'https://6371f8bc025414c6370292a2.mockapi.io/items'
		)
		console.log(response.data, 'MUSIC DATA')

		return response.data
	}
)
