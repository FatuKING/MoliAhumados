import { useCart } from "../hooks/useCart"

export function FormWpp () {
    return (
        <>
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
        </>
    )
}