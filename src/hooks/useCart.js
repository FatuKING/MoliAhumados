import { useContext } from 'react'
import { CartContext } from '../context/cartContext.jsx'

export function useCart () {
  const { cart, viewCart, addToCart, handleView, setCart, resetCart, deleteItemCart } = useContext(CartContext)

  return { cart, setCart, addToCart, resetCart, viewCart, handleView, deleteItemCart }
}
