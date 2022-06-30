export const greetUser = (user) => {
  const date = new Date()
  const hours = date.getHours()

  if (hours > 5 && hours < 11) {
    return `Good Morning, ${user}`
  }
  if (hours > 11 && hours < 17) {
    return `Good Afternoon, ${user}`
  } else {
    return `Good Evening, ${user}`
  }
}
