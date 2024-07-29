import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const [viewCart, setViewCart] = useState(false)

  const handleView = () => {
    setViewCart(!viewCart)
  }

  const resetCart = () => {
    setCart([])
  }

  const deleteItemCart = (index) => {
    const copyCart = structuredClone(cart)
    copyCart.splice(index, 1)
    setCart(copyCart)
  }

  const addToCart = (product) => {
    const productInCart = cart.findIndex(item => item.product === product.product)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState, {
        ...product,
        quantity: 1
      }
    ]))
    console.log(cart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      viewCart,
      setCart,
      resetCart,
      addToCart,
      handleView,
      deleteItemCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
