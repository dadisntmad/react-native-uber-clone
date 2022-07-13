import { RootState } from '../redux/store'

// nav slice
export const selectOrigin = ({ nav }: RootState) => nav.origin
export const selectDestination = ({ nav }: RootState) => nav.destination
export const selectTravelTimeInformation = ({ nav }: RootState) => nav.travelTimeInformation

// food slice
export const selectRestaurants = ({ food }: RootState) => food.restaurants
export const selectSelectedFood = ({ food }: RootState) => food.selectedFood
export const selectTotalPrice = ({ food }: RootState) => food.totalPrice
export const selectReviews = ({ food }: RootState) => food.reviews
