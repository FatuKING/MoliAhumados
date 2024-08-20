const phoneNumber = '5491124037996'

const generateMessage = (cart, paymentType, deliveryType) => {
  let message = '*Hola, quiero realizar el siguiente pedido:*\n\n'

  cart.forEach(item => {
    message += `*- ${item.product} x ${item.quantity} ($${item.priceEnd})*\n`
  })

  message += `\n*Forma de entrega: ${deliveryType}*`
  message += `\n*Forma de pago: ${paymentType}*\n`
  message += `\n*Total: ${calculateTotal(cart)}*\n`

  return message
}

function calculateTotal (cart) {
  return cart.reduce((accumulator, item) => accumulator + Number(item.priceEnd), 0).toLocaleString('es-ES')
}

export function finalizeOrder (cart, paymentType, deliveryType) {
  const mensaje = generateMessage(cart, paymentType, deliveryType)
  const encodedMessage = encodeURIComponent(mensaje)
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.location.href = whatsappURL
}
