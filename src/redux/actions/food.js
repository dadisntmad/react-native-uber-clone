import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../api/API'

export const fetchRestaurants = createAsyncThunk('food/fetchRestaurants', async (city) => {
  try {
    const response = await instance.get(`term=restaurants&location=${city}`)
    return response.data.businesses
  } catch (error) {
    console.log(error)
  }
})
