import { createContext, useReducer } from 'react'

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'addToCart': {
      const { product } = actionPayload
      const productIndex = state.findIndex(item => item.name === product)

      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity += 1
        newState[productIndex].priceEnd = newState[productIndex].quantity * newState[productIndex].price
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
          priceEnd: actionPayload.price
        }
      ]
    }

    case 'resetToCart': {
      return initialState
    }

    case 'deleteItemCart': {
      const { product } = action.payload
      const productIndex = state.findIndex(item => item.product === product)

      const newState = structuredClone(state)
      newState.splice(productIndex, 1)
      return newState
    }

    case 'increaseItemQuantity': {
      const { product } = action.payload
      const productIndex = state.findIndex(item => item.product === product)

      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity += 1
        newState[productIndex].priceEnd = newState[productIndex].quantity * newState[productIndex].price

        return newState
      }

      return state
    }

    case 'decreaseItemQuantity': {
      const { product } = action.payload
      const productIndex = state.findIndex(item => item.product === product)

      if (productIndex >= 0) {
        const newState = structuredClone(state)

        if (newState[productIndex].quantity > 1) {
          newState[productIndex].quantity -= 1
          newState[productIndex].priceEnd = newState[productIndex].quantity * newState[productIndex].price
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
    payload: product
  })

  const resetToCart = () => dispatch({ type: 'resetToCart' })

  const deleteItemCart = product => dispatch({
    type: 'deleteItemCart',
    payload: product
  })

  const increaseItemQuantity = product => dispatch({
    type: 'increaseItemQuantity',
    payload: product
  })

  const decreaseItemQuantity = product => dispatch({
    type: 'decreaseItemQuantity',
    payload: product
  })


  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      deleteItemCart,
      resetToCart,
      increaseItemQuantity,
      decreaseItemQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
