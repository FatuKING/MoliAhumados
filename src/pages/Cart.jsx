import { useCart } from '../hooks/useCart.js'
import { Link } from 'react-router-dom'
import { ItemCart } from '../component/ItemCart.jsx'
import { FormWpp } from '../component/FormWpp.jsx'

export function Cart () {
  const { state, resetToCart } = useCart()
 
  return (
    <>
      <div className='cart shadow-lg'>
        <main className='cartMain border'>
          <header className='container d-flex justify-content-between align-items-center' style={{ height: '80px' }}>
            <Link to='/' className='btn btn-sm p-0'>
              <i className='bi bi-arrow-left' style={{ fontSize: '26px' }} />
            </Link>

            <h1 className='fw-semibold fs-4'>Detalles del Pedido</h1>
          </header>

          <h2 className=' fw-semibold p-2 m-0 fs-5 border-bottom'>Productos</h2>
          <section className='d-flex flex-column'>
            <article className='productsCart border-bottom'>
              {
                state.map((products) => {
                  return (
                    <ItemCart key={products.id} products={products} />
                  )
                })
              }
            </article>

            <div className='d-flex justify-content-center pt-4'>
              <button className='btn btn-link text-black' onClick={resetToCart}>Limpiar Carrito</button>
            </div>

             <FormWpp />
          </section>
        </main>
      </div>
    </>
  )
}
