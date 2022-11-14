import { createSlice } from '@reduxjs/toolkit'
import { fetchMusicListData } from './musicListAsyncActions'

const initialState = {
	musicListData: []
}

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
