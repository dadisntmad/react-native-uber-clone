import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../api/API'

export const fetchRestaurants = createAsyncThunk('food/fetchRestaurants', async (city) => {
  try {
    const response = await instance.get(`search?term=restaurants&location=${city}`)
    return response.data.businesses
  } catch (error) {
    console.log(error)
  }
})

export const fetchReviews = createAsyncThunk('food/fetchReviews', async (restaurantId) => {
  try {
    const response = await instance.get(`${restaurantId}/reviews`)
    return response.data.reviews
  } catch (error) {
    console.log(error)
  }
})
