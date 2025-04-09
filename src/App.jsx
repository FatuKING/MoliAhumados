import { Cart } from './pages/Cart.jsx'
import { Home } from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
