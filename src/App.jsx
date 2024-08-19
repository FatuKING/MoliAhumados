import { useCart } from './hooks/useCart.js'
import { Cart } from './component/Cart.jsx'
import { BodyPage } from './component/BodyPage.jsx'

function App () {
  const { viewCart } = useCart()

  return (
    <>
      {
        viewCart ? <Cart /> : <BodyPage />
      }
    </>
  )
}

export default App
