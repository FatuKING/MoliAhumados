import { useId, useRef } from 'react'
import { useCart } from '../hooks/useCart.js'
import { finalizeOrder } from '../logic/comandWpp.js'

export function Cart () {
  const { state, increaseItemQuantity, decreaseItemQuantity, resetToCart, closeCart, deleteItemCart, subTotal } = useCart()
  const idCheckboxCash = useId()
  const idCheckboxMP = useId()

  const cashRef = useRef(null)

  const handleFinalizeOrder = () => {
    const selectedPaymentMethod = cashRef.current.checked ? 'Efectivo' : 'Mercado Pago'
    finalizeOrder(state, selectedPaymentMethod)
  }

  return (
    <>
      <div className='cart'>
        <main className='cartMain'>
          <header className='container d-flex justify-content-between align-items-center' style={{ height: '100px' }}>
            <button className='btn btn-sm' onClick={closeCart}>
              <i className='bi bi-arrow-left' style={{ fontSize: '24px' }} />
            </button>

            <h1 className='fw-semibold fs-4'>Detalles del Pedido</h1>
          </header>

          <h2 className='bg-dark text-white text-center fw-semibold p-2 text-uppercase m-0 fs-5'>Productos</h2>
          <section className='d-flex flex-column'>
            {
                state.map((products, index) => {
                  return (
                    <article key={index} className='d-flex justify-content-between align-items-center' style={{ height: '100px' }}>
                      <img src={products.img} alt='' className='cartImg' />

                      <div className='d-flex justify-content-start' style={{ width: '120px' }}>
                        <h3 className='fs-6 fw-semibold'>{products.product}</h3>
                      </div>

                      <div className='d-flex justify-content-between align-items-center' style={{ width: '100px' }}>
                        <button className='btn btn-sm' onClick={() => decreaseItemQuantity(products)}><i className='bi bi-dash' /></button>
                        {products.quantity}
                        <button className='btn btn-sm' onClick={() => increaseItemQuantity(products)}><i className='bi bi-plus' /></button>
                      </div>

                      <span style={{ width: '100px' }}>${products.priceEnd}</span>

                      <button className='btn btn-sm' onClick={() => deleteItemCart(products)}><i className='bi bi-trash' /></button>
                    </article>
                  )
                })
            }
            <div className='d-flex justify-content-center pt-4'>
              <button className='btn btn-link text-black' onClick={resetToCart}>Limpiar Carrito</button>
            </div>
            <article className='d-flex flex-column pt-4'>
              <h2 className='bg-dark text-white text-center fw-semibold p-2 text-uppercase fs-5'>Forma de pago</h2>
              <form className='d-flex flex-column container'>
                <label className='fs-5 labelCheck' htmlFor={idCheckboxCash}>
                  <input ref={cashRef} type='radio' id={idCheckboxCash} name='paymentMethod' /> <span>Efectivo</span>
                  <span className='checkmark' />
                </label>

                <label className='fs-5 labelCheck' htmlFor={idCheckboxMP}>
                  <input type='radio' id={idCheckboxMP} style={{ height: '1.5rem' }} name='paymentMethod' /> Mercado Pago
                  <span className='checkmark' />
                </label>
              </form>
            </article>

            <article className='d-flex flex-column align-items-center pt-5 mb-3'>
              <div className='d-flex justify-content-between align-items-center pb-1' style={{ width: '60%' }}>
                <span className='fw-semibold'>Total:</span>
                <span className='fw-semibold'>${subTotal}</span>
              </div>
              <button className='btn btn-dark rounded fw-semibold text-uppercase' style={{ width: '60%' }} onClick={handleFinalizeOrder}>Confirmar Pedido</button>
            </article>
          </section>
        </main>
      </div>
    </>
  )
}