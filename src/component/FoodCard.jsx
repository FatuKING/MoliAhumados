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
              <article className='foodContainer'>
                <div className='foodCard position-relative'>
                  <h3 className='fs-5 fw-bold lh-1'>{product.product}</h3>
                  <span className='foodDescription text-body-secondary fw-semibold lh-sm'>{product.description}</span>

                  <span className='fw-bold position-absolute bottom-1'>{`$${product.price}`}</span>
                  <button className='btn btn-dark btnCart position-absolute bottom-1 end-0 rounded' onClick={() => addToCart(product)}><i className='bi bi-plus-lg' /></button>
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
