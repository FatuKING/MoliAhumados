import { useState } from 'react'
import { ModalImg } from './Portals/ModalImg.jsx'

export function FoodCard ({ foodTitle, foodDescription, foodPrice, foodImg }) {
  const [viewImg, setViewImg] = useState(false)

  const showImg = () => {
    setViewImg(!viewImg)
  }

  return (
    <>
      <section className='food'>
        <article className='foodContainer'>
          <div className='foodCard position-relative'>
            <h3 className='fs-5 fw-bold'>{foodTitle}</h3>
            <span className='foodDescription text-body-secondary fw-semibold'>{foodDescription}</span>

            <span className='fw-bold position-absolute bottom-1'>{`$${foodPrice}`}</span>

          </div>

          <figure className='figureImg'>
            <img onClick={showImg} src={foodImg} className='img rounded' alt='' />
          </figure>
        </article>
      </section>

      {
        viewImg ? <ModalImg img={foodImg} showImg={showImg} /> : null
      }

    </>
  )
}
