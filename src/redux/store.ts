const { configureStore } = require('@reduxjs/toolkit')
import foodSlice from './slices/foodSlice'
import navSlice from './slices/navSlice'

const store = configureStore({
  reducer: {
    nav: navSlice,
    food: foodSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
