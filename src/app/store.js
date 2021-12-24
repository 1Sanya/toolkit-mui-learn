import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import goodsReducer from '../features/goods/goodsSlice'
import usersReducer from '../features/users/usersSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        goods: goodsReducer,
        users: usersReducer
    },
})