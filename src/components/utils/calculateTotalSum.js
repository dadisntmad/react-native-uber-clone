export const calculateTotalSum = (items) => {
  return items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, cur) => prev + cur, 0)
}
