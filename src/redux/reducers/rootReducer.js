import { combineReducers } from '@reduxjs/toolkit'
import musicListReducer from './musicListReducer/musicListSlice'

export const rootReducer = combineReducers({
	musicListReducer
})
