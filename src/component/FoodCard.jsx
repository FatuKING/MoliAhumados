import { useCart } from '../hooks/useCart.js'
import { ShowImg } from './ShowImg.jsx'

export function FoodCard ({ products }) {
  const { addToCart } = useCart()

  return (
    <>
      {
        products.map((product, index) => {
          return (
            <section key={index} className='food'>
              <article className='accordion-body'>
                <div className='foodCard'>
                  <div className='foodDescription'>
                    <h3 className='fs-5 fw-bold'>{product.product}</h3>
                    <span className='text-body-secondary fw-semibold'>{product.description}</span>
                  </div>

                  <div className='d-flex justify-content-between align-items-center foodControl'>
                    <span className='fw-semibold bottom-1'>{`$${product.price}`}</span>

                    <div className='d-flex gap-1 align-items-center'>
                    <button className='btn btn-dark btnAddCart rounded' onClick={() => addToCart(product)}><i className='bi bi-dash-lg' /></button>
                    <span className='fw-semibold'>0</span>
                    <button className='btn btn-dark btnAddCart rounded' onClick={() => addToCart(product)}><i className='bi bi-plus-lg' /></button>
                    </div>
  
                  </div>
               
                </div>

                <ShowImg img={product.img} />
              </article>
            </section>
          )
        })
      }
    </>
  )
}
