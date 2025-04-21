import { useId, useState } from "react"
import { useCart } from "../hooks/useCart"
import { finalizeOrder } from "../logic/comandWpp"

export function FormWpp () {
    const { state } = useCart()

      const idCheckboxCash = useId()
      const idCheckboxMP = useId()
      const idCheckTakeAway = useId()
      const idCheckDelivery = useId()
    
      const [isDelivery, setIsDelivery] = useState(false)
      const [isTakeAway, setIsTakeAway] = useState(true)
    
      const handleChange = () => {
        setIsTakeAway(!isTakeAway)
        setIsDelivery(!isDelivery)
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
            <form className='d-flex flex-column container' onSubmit={handleFinalizeOrder}>
                <section className='d-flex justify-content-between align-items-center'>

                <article className='d-flex flex-column pt-2'>
                <h2 className='fw-semibold m-0 fs-6'>Forma de entrega</h2>

                <label className='fs-5 labelCheck' htmlFor={idCheckTakeAway}>
                  <input defaultChecked type='radio' id={idCheckTakeAway} name='deliveryMethod' onClick={handleChange} value='Take Away' /> <span>Take Away</span>
                  <span className='checkmark' />
                </label>

                <label className='fs-5 labelCheck' htmlFor={idCheckDelivery}>
                  <input type='radio' id={idCheckDelivery} style={{ height: '1.5rem' }} name='deliveryMethod' onClick={handleChange} value='Delivery' /> Delivery
                  <span className='checkmark' />
                </label>
                </article>

                <article className='d-flex flex-column pt-2'>
                  <h2 className='fw-semibold m-0 fs-6'>Forma de pago</h2>
          
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

                <article className="cartInputs">
                    {isTakeAway && <input type='text' id='name' className='form-control inputCart' required name='nameClient' placeholder='¿Quien retira?' />}

                    {isDelivery && <input type='text' id='address' className='form-control inputCart' name='addressClient' required placeholder='Dirección completa' />}
                </article>

                <article className='d-flex flex-column align-items-center pt-5 mb-3'>
                  <div className='d-flex justify-content-between align-items-center pb-1' style={{ width: '60%' }}>
                    <span className='fs-5 fw-semibold'>Total:</span>
                    <span className='fs-5 fw-semibold'>${subTotal(state)}</span>
                  </div>
                  <button className='fs-5 btn btn-dark rounded fw-semibold text-uppercase' type='submit' style={{ width: '60%' }}>Confirmar Pedido</button>
                </article>
              </form>
        </>
    )
}