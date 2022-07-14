import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NavSliceState, Origin } from '../../types/nav'

const initialState: NavSliceState = {
  origin: {} as Origin,
  destination: {} as Origin,
  travelTimeInformation: '',
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin(state, action: PayloadAction<Origin>) {
      state.origin = action.payload
    },
    setDestination(state, action: PayloadAction<Origin>) {
      state.destination = action.payload
    },
    setTravelTimeInformation(state, action: PayloadAction<string>) {
      state.travelTimeInformation = action.payload
    },
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export default navSlice.reducer
