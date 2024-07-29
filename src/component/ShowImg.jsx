import { useState } from 'react'
import { ModalImg } from './Portals/ModalImg.jsx'

export function ShowImg ({ img }) {
  const [viewImg, setViewImg] = useState(false)

  const showImg = () => {
    setViewImg(!viewImg)
  }
  return (
    <>
      <figure className='figureImg'>
        <img onClick={showImg} src={img} className='img rounded' alt={img} />
      </figure>

      {
        viewImg ? <ModalImg img={img} showImg={showImg} /> : null
      }
    </>
  )
}
