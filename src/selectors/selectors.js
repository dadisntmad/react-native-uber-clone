// nav slice
export const selectOrigin = ({ nav }) => nav.origin
export const selectDestination = ({ nav }) => nav.destination
export const selectTravelTimeInformation = ({ nav }) => nav.travelTimeInformation

// food slice
export const selectRestaurants = ({ food }) => food.restaurants
export const selectSelectedFood = ({ food }) => food.selectedFood
export const selectTotalPrice = ({ food }) => food.totalPrice
export const selectReviews = ({ food }) => food.reviews
