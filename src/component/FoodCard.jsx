import { useCart } from '../hooks/useCart.js'
import { ShowImg } from './ShowImg.jsx'
import { QuantitySelector } from './QuantitySelector.jsx'

export function FoodCard ({ products }) {
  const { addToCart } = useCart()

  return (
    <>
      {
        products.map((product) => {
          return (
            <section key={product.id} className='food'>
              <article className='accordion-body'>
                <div className='foodCard'>
                  <div className='foodDescription'>
                    <h3 className='fs-5 fw-bold'>{product.nombre}</h3>
                    <span className='text-body-secondary fw-semibold'>{product.descripcion}</span>
                  </div>

                  <div className='d-flex justify-content-between align-items-center foodControl'>
                    <span className='fw-semibold bottom-1'>{`$${product.precio}`}</span>

                    <QuantitySelector></QuantitySelector>
                  </div>
               
                </div>

                <ShowImg img={product.imagen} />
              </article>
            </section>
          )
        })
      }
    </>
  )
}
