const phoneNumber = '5491124037996'

const generateMessage = (cart, formData) => {
  let message = '*Hola, quiero realizar el siguiente pedido:*\n\n'

  cart.forEach(item => {
    message += `*- ${item.name} x ${item.quantity} ($${item.priceEnd})*\n`
  })

  message += `\n*Forma de entrega: ${formData.deliveryMethod}*`
  if (formData.deliveryMethod === 'Take Away') {
    message += `\n*Retira: ${formData.nameClient}*`
  } else {
    message += `\n*Dirreción: ${formData.addressClient}*`
  }
  message += `\n*Forma de pago: ${formData.paymentMethod}*\n`

  if (formData.deliveryMethod === 'Delivery') {
    message += `\n*Total: ${calculateTotal(cart, true)}*\n`
  } else {
    message += `\n*Total: ${calculateTotal(cart, false)}*\n`
  }

  return message
}

function calculateTotal (cart, delivery) {
  if (delivery === true) {
    const total = cart.reduce((accumulator, item) => accumulator + Number(item.priceEnd), 0)
    return (total + 1000).toLocaleString('es-ES')
  }
  return cart.reduce((accumulator, item) => accumulator + Number(item.priceEnd), 0).toLocaleString('es-ES')
}

export function finalizeOrder (cart, formData) {
  const mensaje = generateMessage(cart, formData)
  const encodedMessage = encodeURIComponent(mensaje)
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.location.href = whatsappURL
}
