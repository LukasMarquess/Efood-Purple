import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

export interface CartItem extends Produto {
  quantidade: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const pratoJaExiste = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (pratoJaExiste) {
        pratoJaExiste.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const pratoJaExiste = state.items.find(
        (item) => item.id === action.payload
      )

      if (pratoJaExiste) {
        if (pratoJaExiste.quantidade > 1) {
          pratoJaExiste.quantidade -= 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
