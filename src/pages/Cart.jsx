import { useId, useState } from 'react'
import { useCart } from '../hooks/useCart.js'
import { finalizeOrder } from '../logic/comandWpp.js'
import { Link } from 'react-router-dom'
import { ItemCart } from '../component/ItemCart.jsx'

export function Cart () {
  const { state, resetToCart } = useCart()
  const idCheckboxCash = useId()
  const idCheckboxMP = useId()
  const idCheckTakeAway = useId()
  const idCheckDelivery = useId()

  const [isDelivery, setIsDelivery] = useState(false)
  const [isTakeAway, setIsTakeAway] = useState(false)

  const handleDeliveryChange = () => {
    setIsTakeAway(false)
    setIsDelivery(true)
  }

  const handleTakeAwayChange = () => {
    setIsDelivery(false)
    setIsTakeAway(true)
  }

  const handleFinalizeOrder = (e) => {
    e.preventDefault()
    const form = new window.FormData(e.target)

    const formData = {
      deliveryMethod: form.get('deliveryMethod'),
      paymentMethod: form.get('paymentMethod'),
      nameClient: form.get('nameClient'),
      addressClient: form.get('addressClient')
    }
    finalizeOrder(state, formData)
  }

  function subTotal (cart) {
    if (isDelivery === true) {
      const total = cart.reduce((accumulator, item) => accumulator + Number(item.priceEnd), 0)
      return (total + 1000).toLocaleString('es-ES')
    }
    return cart.reduce((accumulator, item) => accumulator + Number(item.priceEnd), 0).toLocaleString('es-ES')
  }

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

          <h2 className=' fw-semibold p-2 m-0 fs-5'>Productos</h2>
          <section className='d-flex flex-column'>
            <article className='productsCart'>
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

              <form className='d-flex flex-column container' onSubmit={handleFinalizeOrder}>
                <section className='d-flex justify-content-between align-items-center'>

                <article className='d-flex flex-column pt-2'>
                <h2 className='fw-semibold m-0 fs-6'>Forma de entrega</h2>

                <label className='fs-5 labelCheck' htmlFor={idCheckTakeAway}>
                  <input type='radio' id={idCheckTakeAway} name='deliveryMethod' onClick={handleTakeAwayChange} value='Take Away' /> <span>Take Away</span>
                  <span className='checkmark' />
                </label>

                {isTakeAway && <input type='text' id='name' className='form-control inputCart' required name='nameClient' placeholder='¿Quien retira?' />}

                <label className='fs-5 labelCheck' htmlFor={idCheckDelivery}>
                  <input type='radio' id={idCheckDelivery} style={{ height: '1.5rem' }} name='deliveryMethod' onClick={handleDeliveryChange} value='Delivery' /> Delivery
                  <span className='checkmark' />
                </label>

                {isDelivery && <input type='text' id='address' className='form-control inputCart' name='addressClient' required placeholder='Dirección completa' />}

                </article>

                <article className='d-flex flex-column pt-2'>
                  <h2 className='fw-semibold fs-6'>Forma de pago</h2>
          
                  <label className='fs-5 labelCheck' htmlFor={idCheckboxCash}>
                    <input type='radio' id={idCheckboxCash} name='paymentMethod' value='Efectivo' required /> <span>Efectivo</span>
                    <span className='checkmark' />
                  </label>

                  <label className='fs-5 labelCheck' htmlFor={idCheckboxMP}>
                    <input type='radio' id={idCheckboxMP} style={{ height: '1.5rem' }} name='paymentMethod' value='Mercado Pago' required /> Transferencia
                    <span className='checkmark' />
                  </label>
                </article>
                </section>

                <article className='d-flex flex-column align-items-center pt-5 mb-3'>
                  <div className='d-flex justify-content-between align-items-center pb-1' style={{ width: '60%' }}>
                    <span className='fw-semibold'>Total:</span>
                    <span className='fw-semibold'>${subTotal(state)}</span>
                  </div>
                  <button className='btn btn-dark rounded fw-semibold text-uppercase' type='submit' style={{ width: '60%' }}>Confirmar Pedido</button>
                </article>
              </form>
          </section>
        </main>
      </div>
    </>
  )
}
