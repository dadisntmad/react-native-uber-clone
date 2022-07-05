import { createSlice } from '@reduxjs/toolkit'
import { fetchRestaurants } from '../actions/food'

const initialState = {
  restaurants: [],
  isLoading: false,
  error: '',
}

const foodSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: {
    [fetchRestaurants.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.restaurants = action.payload
    },
    [fetchRestaurants.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchRestaurants.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { setLocation } = foodSlice.actions

export default foodSlice.reducer
