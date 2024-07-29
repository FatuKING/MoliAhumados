import { useId } from 'react'
import { useCart } from '../hooks/useCart.js'

export function Cart () {
  const { cart, handleView, deleteItemCart } = useCart()
  const idCheckboxCash = useId()
  const idCheckboxMP = useId()

  return (
    <>
      <div className='cart'>
        <main className=''>
          <header className='container d-flex justify-content-between align-items-center' style={{ height: '100px' }}>
            <button className='btn btn-sm' onClick={handleView}>
              <i className='bi bi-arrow-left' style={{ fontSize: '24px' }} />
            </button>

            <h3 className='fw-semibold'>Detalles del Pedido</h3>
          </header>

          <h6 className='bg-dark text-white text-center fw-semibold p-2 text-uppercase m-0'>Productos</h6>
          <section className='d-flex flex-column'>
            {
                cart.map((products, index) => {
                  return (
                    <article key={index} className='d-flex justify-content-between align-items-center' style={{ height: '100px' }}>
                      <img src={products.img} alt='' className='' style={{ height: '100px', width: '100px', objectFit: 'cover' }} />

                      <div className='d-flex justify-content-start' style={{ width: '120px' }}>
                        <h6 className='fs-6 fw-semibold'>{products.product}</h6>
                      </div>

                      <div className='d-flex justify-content-between align-items-center' style={{ width: '100px' }}>
                        <button className='btn btn-sm'><i className='bi bi-dash' /></button>
                        {products.quantity}
                        <button className='btn btn-sm'><i className='bi bi-plus' /></button>
                      </div>

                      <span style={{ width: '100px' }}>${products.price}</span>

                      <button className='btn btn-sm' onClick={() => deleteItemCart(index)}><i className='bi bi-trash' /></button>
                    </article>
                  )
                })
            }
            <article className='d-flex flex-column'>
              <h6 className='bg-dark text-white text-center fw-semibold p-2 text-uppercase'>Forma de pago</h6>
              <div className='d-flex flex-column container'>
                <label className='fs-5' htmlFor={idCheckboxCash}>
                  <input className='' type='radio' id={idCheckboxCash} /> Efectivo
                </label>

                <label className='fs-5' htmlFor={idCheckboxMP}>
                  <input type='radio' id={idCheckboxMP} style={{ height: '1.5rem' }} /> Mercado Pago
                </label>
              </div>
            </article>

            <article className='d-flex flex-column align-items-center pt-5'>
              <div className='d-flex justify-content-between align-items-center pb-1' style={{ width: '60%' }}>
                <span className='fw-semibold'>Total:</span>
                <span className='fw-semibold'>$9.000</span>
              </div>
              <button className='btn btn-dark rounded fw-semibold text-uppercase' style={{ width: '60%' }}>Confirmar Pedido</button>
            </article>
          </section>
        </main>
      </div>
    </>
  )
}
