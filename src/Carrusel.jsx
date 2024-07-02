import { useState } from 'react'

export function Carrusel () {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div className='carousel slide position-relative' data-bs-ride='carousel'>
        <div className='carousel-inner'>

          <div className='carousel-item active'>
            <img src='/SANGUCHES-1.jpg' className='d-block w-100' alt='SANGUCHES-1.jpg' />
          </div>

          <div className='carousel-item'>
            <img src='/SANGUCHES-2.jpg' className='d-block w-100' alt='SANGUCHES-2.jpg' />
          </div>

          <div className='carousel-item'>
            <img src='/SANGUCHES-3.jpg' className='d-block w-100' alt='SANGUCHES-3.jpg' />
          </div>

        </div>

        <div className='position-absolute position-x'>
          <span className={`rounded-5 p-1 ps-2 pe-2 fw-bold text-black ${open ? 'bg-success' : 'bg-danger'}`}><i className='bi bi-alarm fw-bold' /> {open ? 'Abierto' : 'Cerrado'}</span>
        </div>
      </div>
    </>
  )
}
