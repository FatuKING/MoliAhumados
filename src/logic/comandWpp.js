const phoneNumber = '5491124037996'

const generateMessage = (cart, formData) => {
  let message = '*Hola, quiero realizar el siguiente pedido:*\n\n'

  cart.forEach(item => {
    message += `*- ${item.product} x ${item.quantity} ($${item.priceEnd})*\n`
  })

  message += `\nForma de entrega: *${formData.deliveryMethod}*`
  if (formData.deliveryMethod === 'Take Away') {
    message += `\nRetira: *${formData.nameClient}*`
  } else {
    message += `\nDirreción: *${formData.addressClient}*`
  }
  message += `\nForma de pago: *${formData.paymentMethod}*\n`

  if (formData.deliveryMethod === 'Delivery') {
    message += `\nTotal: *${calculateTotal(cart, true)}*\n`
  } else {
    message += `\nTotal: *${calculateTotal(cart, false)}*\n`
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
