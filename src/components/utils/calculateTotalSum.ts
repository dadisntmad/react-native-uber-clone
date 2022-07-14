import { SelectedFood } from '../../types/food'

export const calculateTotalSum = (items: SelectedFood[]) => {
  return items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, cur) => prev + cur, 0)
}
