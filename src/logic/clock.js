export function clock () {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()

  if (day === 4 || day === 5 || day === 6 || day === 7) {
    if (hour === 19 || hour === 20 || hour === 21 || hour === 22 || hour === 23) {
      return true
    }
  } else {
    return false
  }
}
