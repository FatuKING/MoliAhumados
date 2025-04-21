import { Cart } from './pages/Cart.jsx'
import { Home } from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
