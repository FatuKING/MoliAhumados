import { ShowImg } from './ShowImg.jsx'
import { QuantitySelector } from './QuantitySelector.jsx'

export function FoodCard ({ products }) {

  return (
    <>
      {
        products.map((product) => {
          return (
            <section key={product.id} className='food'>
              <article className='accordion-body'>
                <div className='foodCard'>
                  <div className='foodDescription'>
                    <h3 className='fs-5 fw-bold'>{product.name}</h3>
                    <span className='text-body-secondary fw-semibold'>{product.description}</span>
                  </div>

                  <div className='d-flex justify-content-between align-items-center foodControl'>
                    <span className='fw-semibold bottom-1'>{`$${product.price}`}</span>

                    <QuantitySelector product={product}></QuantitySelector> 
                  </div>
               
                </div>

                <ShowImg img={product.image} id={product.id}/>
              </article>
            </section>
          )
        })
      }
    </>
  )
}
