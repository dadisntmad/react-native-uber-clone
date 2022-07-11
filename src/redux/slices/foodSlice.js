import { createSlice } from '@reduxjs/toolkit'
import { fetchRestaurants, fetchReviews } from '../actions/food'
import { calculateTotalSum } from '../../components/utils/calculateTotalSum'

const initialState = {
  restaurants: [],
  isLoading: false,
  error: '',
  selectedFood: [],
  totalPrice: 0,
  reviews: [],
}

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setSelectedFood(state, action) {
      if (action.payload.checkboxValue) {
        state.selectedFood = [...state.selectedFood, action.payload]
        state.totalPrice = calculateTotalSum(state.selectedFood)
      } else {
        state.selectedFood = state.selectedFood.filter((item) => item.id !== action.payload.id)
        state.totalPrice = calculateTotalSum(state.selectedFood)
      }
    },
  },
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
    [fetchReviews.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.reviews = action.payload
    },
    [fetchReviews.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchReviews.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { setSelectedFood } = foodSlice.actions

export default foodSlice.reducer
