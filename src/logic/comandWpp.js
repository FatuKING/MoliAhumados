const phoneNumber = '5491124037996'

const generateMessage = (cart, paymentType) => {
  let message = '*Hola, quiero realizar el siguiente pedido:*\n'

  cart.forEach(item => {
    message += `*- ${item.product} x ${item.quantity} ($${item.priceEnd} c/u)*\n`
  })

  message += `\n*Forma de pago: ${paymentType}*\n`
  message += `\n*Total: ${calculateTotal(cart)}*\n`

  return message
}

function calculateTotal (cart) {
  return cart.reduce((accumulator, item) => accumulator + Number(item.priceEnd), 0).toLocaleString('es-ES')
}

export function finalizeOrder (cart, paymentType) {
  const mensaje = generateMessage(cart, paymentType)
  const encodedMessage = encodeURIComponent(mensaje)
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.location.href = whatsappURL
}
