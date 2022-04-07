import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const FavoriteStar = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    decrement: (state) => {
      state.value = false
    },
    toggle: (state) => {
        state.value = !state.value
      },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, toggle } = FavoriteStar.actions

export const selectCount = (state) => state.favorite.value

export default FavoriteStar.reducer