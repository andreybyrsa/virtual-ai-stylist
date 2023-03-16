import { Card } from '@Domain/card'

interface CardInitialState {
  cards: Card[]
}

const initialState: CardInitialState = {
  cards: [],
}

export default initialState
