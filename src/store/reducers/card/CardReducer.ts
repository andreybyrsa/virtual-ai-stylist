import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Card } from '@Domain/card'

import initialState from './initialState'

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload)
    },
    removeCard(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter((elem) => elem.cardName != action.payload)
    },
  },
})

export const {} = cardSlice.actions

export default cardSlice.reducer
