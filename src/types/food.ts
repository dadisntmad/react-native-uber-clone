export type FoodSliceState = {
  restaurants: Restaurants[]
  isLoading: boolean
  error: string
  selectedFood: SelectedFood[]
  totalPrice: number
  reviews: Reviews[]
}

export type Restaurants = {
  id: string
  image_url: string
  name: string
  rating: number
}

export type SelectedFood = {
  id: string
  title: string
  description: string
  price: string
  image: string
  checkboxValue: boolean
}

export type Reviews = {
  id: string
  user: User
  time_created: string
  text: string
}

type User = {
  image_url: string
  name: string
}
