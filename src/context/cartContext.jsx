import { createContext, useReducer } from 'react'

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'addToCart': {
      const { product } = actionPayload
      const productIndex = state.findIndex(item => item.id === product.id) 

      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity += 1
        newState[productIndex].priceEnd = newState[productIndex].quantity * newState[productIndex].price
        return newState
      }

      return [
        ...state,
        {
          ...product, 
          quantity: 1,
          priceEnd: product.price
        }
      ]
    }

    case 'resetToCart': {
      return initialState
    }

    case 'increaseItemQuantity': {
      const { product } = action.payload
      const productIndex = state.findIndex(item => item.id === product.id) 

      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity += 1
        newState[productIndex].priceEnd = newState[productIndex].quantity * newState[productIndex].price

        return newState
      }

      return state
    }

    case 'deleteItem': {
      const { id } = action.payload
      const productIndex = state.findIndex(item => item.id === id) 

      if (productIndex >= 0) {
        const newState = structuredClone(state)

        if (newState[productIndex].quantity > 0) {
          newState[productIndex].quantity -= 1
          newState[productIndex].priceEnd = newState[productIndex].quantity * newState[productIndex].price
        }

        if (newState[productIndex].quantity === 0) {
          newState.splice(productIndex, 1)
        }

        return newState
      }
      return state
    }
  }

  return state
}

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = product => dispatch({
    type: 'addToCart',
    payload: { product } 
  })

  const resetToCart = () => dispatch({ type: 'resetToCart' })

  const deleteItem = id => dispatch({
    type: 'deleteItem',
    payload: { id } 
  })


  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      resetToCart,
      deleteItem
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
