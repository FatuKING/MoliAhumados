import { createPortal } from 'react-dom'

export function ModalImg ({ img, showImg }) {
  return createPortal(
    <>
      <div className='modalMain' onClick={showImg}>
        <figure className='modalContenedor rounded shadow-lg tilt-in-top-1'>
          <img className='modalImg rounded shadow-lg' src={img} alt={img} />
        </figure>
      </div>
    </>,
    document.getElementById('portals')
  )
}
