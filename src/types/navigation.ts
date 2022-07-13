import { Restaurants } from './food'

export type RootStackParamList = {
  Auth: undefined
  Home: undefined
  Map: undefined
  Food: undefined
  Cart: undefined
  Restaurant: {
    item: Restaurants
  }
  Reviews: {
    id: string
  }
  Navigate: undefined
  Ride: undefined
}
