export const api = async (url) => {
  try {
    const response = await fetch(url)
    const text = await response.text()

    return text.split('\n').slice(1).map(row => {
      const [product, description, img, price] = row.split('\t')

      return {
        product,
        description,
        img,
        price: price.trim()
      }
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

// api(url).then(data => {
//   console.log(data)
// }).catch(error => {
//   console.error('Error:', error)
// })
