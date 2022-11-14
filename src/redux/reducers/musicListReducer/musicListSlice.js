import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	musicListData: []
}

export const fetchMusicListData = createAsyncThunk(
	'musicList/fetchData',
	async () => {
		const response = await fetch(
			'https://6371f8bc025414c6370292a2.mockapi.io/items'
		)
		const data = await response.json()
		console.log(data, 'MUSIC DATA')

		return data
	}
)

export const musicListSlice = createSlice({
	name: 'musicList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMusicListData.fulfilled, (state, action) => {
			state.musicListData = action.payload
		})
	}
})

export default musicListSlice.reducer
