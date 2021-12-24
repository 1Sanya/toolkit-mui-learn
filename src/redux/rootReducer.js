import {combineReducers} from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import goodsReducer from './slices/goodsSlice'
import usersReducer from './slices/usersSlice'

export const rootReducer = combineReducers({
  counter: counterReducer,
  goods: goodsReducer,
  users: usersReducer
})