import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  goods: [
    {
      name: 'Яндекс Станция',
      poster: 'https://targetsell.ru/images/products/1578501923.jpg',
      cost: '10999'
    },
    {
      name: 'Кофемашина',
      poster: 'https://coffee-tea.ru/upload/iblock/a1f/a1fca6796820c4684f0de90865147506.png',
      cost: '55490'
    },
    {
      name: 'Питчер',
      poster: 'https://mircoffee.ru/foto/product/32/326d93efe4c7d17149e382e8d7900878_b.jpg',
      cost: '999'
    },
    {
      name: 'Мяч для мини-футбола',
      poster: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e05c644cb91b42dc8019ad1101593139_9366/Futbolnyj_myach_Liga_chempionov_UEFA_Pyrostorm_belyj_GT7788_01_standard.jpg',
      cost: '1999'
    },
  ],
  sectionName: 'Товары',
  cart: []
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [action.payload + state.cart]
    },
    removeFromCart: (state) => {
    }
  }
})

export const {
  addToCart
} = goodsSlice.actions

export default goodsSlice.reducer

